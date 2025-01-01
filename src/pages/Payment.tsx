import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, CreditCard, QrCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "qpay">("card");
  const navigate = useNavigate();
  const duration = searchParams.get("duration") || "monthly";

  const getPlanPrice = () => {
    const prices = {
      monthly: 12.95,
      yearly: 7.77
    };
    return prices[duration as keyof typeof prices];
  };

  const calculateTotal = () => {
    const basePrice = getPlanPrice();
    const months = duration === "monthly" ? 1 : 12;
    return (basePrice * months).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-10 left-0 text-white hover:text-gray-300"
            onClick={() => navigate(-1)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Left Column - Account Creation */}
          <div className="bg-[#2A2F3C] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Create your account</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 mb-2 block">Your email address</label>
                <Input 
                  type="email" 
                  placeholder="name@example.com"
                  className="bg-[#1A1F2C] border-gray-700 text-white"
                />
              </div>

              <div className="relative">
                <label className="text-gray-300 mb-2 block">Set Your Password</label>
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="8 characters min"
                  className="bg-[#1A1F2C] border-gray-700 text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-gray-400"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              By submitting this form you agree to our{" "}
              <Link to="/terms-of-service" className="text-[#8B5CF6] hover:underline">
                Terms of service
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-[#8B5CF6] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Right Column - Payment Details */}
          <div className="bg-[#2A2F3C] p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="bg-[#1A1F2C] p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-white font-medium">Standard Plan</h3>
                  <p className="text-gray-400">{duration} plan (${getPlanPrice()}/mo)</p>
                </div>
                <div className="text-white">${calculateTotal()}</div>
              </div>

              {duration === "yearly" && (
                <div className="bg-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full inline-block">
                  Save 40%
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Select Your Payment Method</h3>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className={`flex-1 ${
                    paymentMethod === "card"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <CreditCard className="mr-2" /> Card
                </Button>
                <Button
                  variant="outline"
                  className={`flex-1 ${
                    paymentMethod === "qpay"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                  onClick={() => setPaymentMethod("qpay")}
                >
                  <QrCode className="mr-2" /> QPay
                </Button>
              </div>

              {paymentMethod === "card" ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-300 mb-2 block">Card Number</label>
                    <Input 
                      type="text"
                      placeholder="Card number"
                      className="bg-[#1A1F2C] border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-gray-300 mb-2 block">Card holder name</label>
                    <Input 
                      type="text"
                      placeholder="Your name on card"
                      className="bg-[#1A1F2C] border-gray-700 text-white"
                    />
                  </div>

                  <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                    Pay with Credit Card
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="bg-white p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                    <QrCode className="w-full h-full text-black" />
                  </div>
                  <p className="text-gray-300">
                    Scan with QPay app to complete payment
                  </p>
                </div>
              )}
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
              30-Day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;