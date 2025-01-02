import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

const plan: Plan = {
  name: "VPN",
  description: "Ultimate online privacy and security",
  monthlyPrice: 12.95,
  yearlyPrice: 7.77,
  features: [
    "Military-grade encryption",
    "No-logs policy for complete privacy",
    "24/7 customer support"
  ]
};

const PricingSection = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (duration: string) => {
    navigate(`/payment?duration=${duration}`);
  };

  return (
    <section id="pricing" className="py-20 bg-violet">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-accent">
            Risk-free with our 30-day money-back guarantee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative bg-gradient-to-b from-ebony to-violet rounded-xl overflow-hidden border-2 border-primary/50 h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly Plan</h3>
                <p className="text-accent mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-white">
                    ${plan.monthlyPrice.toFixed(2)}
                    <span className="text-lg text-accent">/mo</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePlanSelection('monthly')}
                  className="w-full py-3 px-6 rounded-lg mb-4 bg-primary hover:bg-[rgb(148,80,252)] transition-colors duration-300 text-white"
                >
                  Get Protected Now
                </button>

                <div className="space-y-4">
                  <p className="font-medium text-white">What's included:</p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-accent">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Yearly Plan (Most Popular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-b from-ebony to-violet rounded-xl overflow-hidden border-2 border-primary h-full">
              <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2">
                Most Popular
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-white mb-2">1 Year Plan</h3>
                <p className="text-accent mb-4">{plan.description}</p>
                
                <div className="bg-primary/20 text-primary rounded-full px-4 py-1 inline-block mb-6">
                  40% off
                </div>

                <div className="mb-6">
                  <span className="text-accent line-through">
                    ${plan.monthlyPrice.toFixed(2)}
                  </span>
                  <div className="text-4xl font-bold text-white">
                    ${plan.yearlyPrice.toFixed(2)}
                    <span className="text-lg text-accent">/mo</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePlanSelection('yearly')}
                  className="w-full py-3 px-6 rounded-lg mb-4 bg-primary hover:bg-[rgb(148,80,252)] transition-colors duration-300 text-white"
                >
                  Get Protected Now
                </button>

                <div className="space-y-4">
                  <p className="font-medium text-white">What's included:</p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-accent">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;