import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const plan = searchParams.get("plan") || "standard";
  const duration = searchParams.get("duration") || "monthly";

  const getPlanPrice = () => {
    // This is a simplified version. In a real app, you'd want to get these from a central source
    const prices = {
      standard: {
        monthly: 12.95,
        "1-year": 3.99,
        "2-year": 2.14,
        "5-year": 1.99
      }
    };
    return prices.standard[duration as keyof typeof prices.standard] || 12.95;
  };

  const calculateTotal = () => {
    const basePrice = getPlanPrice();
    const months = duration === "monthly" ? 1 : duration === "1-year" ? 12 : 24;
    return (basePrice * months).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
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
              <Link to="/terms-of-service" className="text-[#9b87f5] hover:underline">
                Terms of service
              </Link>
              ,{" "}
              <Link to="#" className="text-[#9b87f5] hover:underline">
                Renewal Prices
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-[#9b87f5] hover:underline">
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
                  <h3 className="text-white font-medium capitalize">{plan}</h3>
                  <p className="text-gray-400">{duration} plan (${getPlanPrice()}/mo)</p>
                </div>
                <div className="text-white">${calculateTotal()}</div>
              </div>

              <div className="bg-[#FFE4B5] text-black px-3 py-1 rounded-full inline-block">
                Save 83% {duration === "2-year" && "+ 3 months"}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Select Your Payment Method</h3>
              
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 bg-white hover:bg-gray-100">
                  <CreditCard className="mr-2" /> Card
                </Button>
                <Button variant="outline" className="flex-1" disabled>
                  PayPal
                </Button>
              </div>

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

                <Button className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
                  Pay with Credit Card
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-4">
              31-Day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;