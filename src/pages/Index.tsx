import { motion } from "framer-motion";
import { Shield, Zap, Lock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] via-[#1A1F2C]/95 to-[#1A1F2C]" />
        <div className="container relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img
              src="/lovable-uploads/6ed83d42-8de4-4b59-9de2-acf44d85d469.png"
              alt="NomadNet Logo"
              className="h-24 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Stay Connected to Mongolia, Wherever You Are!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              NomadNet - The Secure, Fast, and Reliable VPN for Foreign Mongolians
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8"
              >
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white px-8"
              >
                Download for Android
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1F2C]/50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Why Choose NomadNet?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Access",
                description:
                  "Seamlessly access Mongolian government services, banking, and local content.",
              },
              {
                icon: Zap,
                title: "Fast Speeds",
                description:
                  "Optimized servers ensure low latency and high-speed browsing.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description:
                  "No-logs policy and end-to-end encryption for your peace of mind.",
              },
              {
                icon: Smartphone,
                title: "Easy Setup",
                description: "One-tap connection for all your devices.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#2A2F3C] p-6 rounded-xl hover:bg-[#2A2F3C]/80 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-[#9b87f5] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A1F2C] text-gray-300">
        <div className="container text-center">
          <p className="mb-4">© 2024 NomadNet. All Rights Reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;