import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, QrCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8); // Simplified password check, only requires 8+ characters

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [hasCheckedPayment, setHasCheckedPayment] = useState(false);
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

  const validateEmail = (email: string) => {
    const result = emailSchema.safeParse(email);
    setIsEmailValid(result.success);
    return result.success;
  };

  const checkPasswordStrength = (password: string) => {
    const result = passwordSchema.safeParse(password);
    if (!result.success) {
      setPasswordStrength("Weak - Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character");
    } else {
      setPasswordStrength("Strong");
    }
  };

  const handleCheckPayment = () => {
    setHasCheckedPayment(true);
    toast.success("Payment verified successfully!");
  };

  return (
    <div className="min-h-screen bg-violet py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute -top-10 left-0 text-white hover:text-accent"
            onClick={() => navigate(-1)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Left Column - Account Creation */}
          <div className="bg-ebony p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Create your account</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-accent mb-2 block">Your email address</label>
                <Input 
                  type="email" 
                  placeholder="name@example.com"
                  className="bg-violet border-accent text-white"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                />
                {!isEmailValid && email && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                )}
              </div>

              <div className="relative">
                <label className="text-accent mb-2 block">Set Your Password</label>
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="8 characters min"
                  className="bg-violet border-accent text-white pr-10"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    checkPasswordStrength(e.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-accent"
                >
                  <Eye className="w-5 h-5" />
                </button>
                {passwordStrength && (
                  <p className={`text-sm mt-1 ${passwordStrength === "Strong" ? "text-green-500" : "text-red-500"}`}>
                    {passwordStrength}
                  </p>
                )}
              </div>
            </div>

            <p className="text-sm text-accent mt-4">
              By submitting this form you agree to our{" "}
              <Link to="/terms-of-service" className="text-primary hover:underline">
                Terms of service
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Right Column - Payment Details */}
          <div className="bg-ebony p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="bg-violet p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-white font-medium">
                    {duration === "monthly" ? "Monthly" : "1 Year"} Plan
                  </h3>
                  <p className="text-accent">${getPlanPrice()}/mo</p>
                </div>
                <div className="text-white">${calculateTotal()}</div>
              </div>

              {duration === "yearly" && (
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full inline-block">
                  Save 40%
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">QPay Payment</h3>
              
              <div className="text-center space-y-4">
                <div className="bg-white p-8 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                  <QrCode className="w-full h-full text-violet" />
                </div>
                <p className="text-accent">
                  Scan with QPay app to complete payment
                </p>
                <Button
                  className="w-full bg-primary hover:bg-secondary text-white transition-colors duration-300"
                  onClick={handleCheckPayment}
                >
                  I have completed the payment
                </Button>
                {hasCheckedPayment && (
                  <p className="text-green-500">Payment verified successfully!</p>
                )}
              </div>
            </div>

            <p className="text-center text-sm text-accent mt-4">
              30-Day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
