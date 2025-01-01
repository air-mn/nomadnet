import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

type PlanDuration = "monthly" | "1-year" | "2-year" | "5-year";
type PlanType = "Standard" | "Plus" | "Max";

interface Plan {
  name: PlanType;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  twoYearPrice: number;
  fiveYearPrice: number;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Standard",
    description: "Suitable for online anonymity",
    monthlyPrice: 12.95,
    yearlyPrice: 3.99,
    twoYearPrice: 2.14,
    fiveYearPrice: 1.99,
    features: [
      "Full featured, Faster VPN",
      "One-tap Tracker Blocker"
    ],
    highlighted: true
  },
  {
    name: "Plus",
    description: "Suitable for online security",
    monthlyPrice: 15.95,
    yearlyPrice: 5.82,
    twoYearPrice: 2.96,
    fiveYearPrice: 2.82,
    features: [
      "Strong Password Manager",
      "File encryption tool"
    ]
  },
  {
    name: "Max",
    description: "Suitable for internet freedom",
    monthlyPrice: 19.95,
    yearlyPrice: 7.07,
    twoYearPrice: 4.07,
    fiveYearPrice: 3.99,
    features: [
      "Remove My Data",
      "Dark Web monitoring"
    ]
  }
];

const PricingSection = () => {
  const [selectedDuration, setSelectedDuration] = useState<PlanDuration>("2-year");
  const navigate = useNavigate();

  const getPrice = (plan: Plan, duration: PlanDuration) => {
    switch (duration) {
      case "monthly":
        return plan.monthlyPrice;
      case "1-year":
        return plan.yearlyPrice;
      case "2-year":
        return plan.twoYearPrice;
      case "5-year":
        return plan.fiveYearPrice;
      default:
        return plan.monthlyPrice;
    }
  };

  const getDiscount = (plan: Plan, duration: PlanDuration) => {
    const regularPrice = plan.monthlyPrice;
    const discountedPrice = getPrice(plan, duration);
    return Math.round(((regularPrice - discountedPrice) / regularPrice) * 100);
  };

  const handlePlanSelection = (planName: PlanType) => {
    navigate(`/payment?plan=${planName.toLowerCase()}&duration=${selectedDuration}`);
  };

  return (
    <section id="pricing" className="py-20 bg-[#1A1F2C]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Grab the Once-In-A-Year New Year Deal
          </h2>
          <p className="text-gray-400">
            Save extra 83% off + extra 3 months on 2-year plan
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {["5-year", "2-year", "1-year", "monthly"].map((duration) => (
            <button
              key={duration}
              onClick={() => setSelectedDuration(duration as PlanDuration)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedDuration === duration
                  ? "bg-[#9b87f5] text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {duration} plan
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative bg-[#2A2F3C] rounded-xl overflow-hidden ${
                plan.highlighted ? "border-2 border-[#9b87f5]" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-[#9b87f5] text-white text-center py-2">
                  Best Selling
                </div>
              )}
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                
                <div className="bg-[#FFE4B5] text-black rounded-full px-4 py-1 inline-block mb-6">
                  {getDiscount(plan, selectedDuration)}% off
                  {selectedDuration === "2-year" && " +3 months"}
                </div>

                <div className="mb-6">
                  <span className="text-gray-400 line-through">
                    ${plan.monthlyPrice.toFixed(2)}
                  </span>
                  <div className="text-4xl font-bold text-white">
                    ${getPrice(plan, selectedDuration).toFixed(2)}
                    <span className="text-lg text-gray-400">/mo</span>
                  </div>
                </div>

                <button
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full py-3 px-6 rounded-lg mb-4 transition-colors ${
                    plan.highlighted
                      ? "bg-[#FFA500] hover:bg-[#FF8C00] text-white"
                      : "bg-white hover:bg-gray-100 text-black"
                  }`}
                >
                  Get {plan.name} Plan
                </button>

                <p className="text-sm text-gray-400 text-center mb-6">
                  31-Day Money-Back Guarantee
                </p>

                <div className="space-y-4">
                  <p className="font-medium text-white">
                    {plan.name === "Standard" ? "What's included:" : "Everything in Standard, with"}
                  </p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#9b87f5]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;