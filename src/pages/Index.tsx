import { motion } from "framer-motion";
import { Shield, Zap, Lock, Smartphone, Globe, Server, Shield as ShieldIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PricingSection from "@/components/pricing/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F2937] backdrop-blur-sm border-b border-[#1F2937]/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/lovable-uploads/123.png"
                alt="NomadNet Logo"
                className="h-8"
              />
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center space-x-8"
            >
              <a
                href="#features"
                className="text-gray-100 hover:text-[#9b87f5] transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-100 hover:text-[#9b87f5] transition-colors duration-200"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-gray-100 hover:text-[#9b87f5] transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#download"
                className="text-gray-100 hover:text-[#9b87f5] transition-colors duration-200"
              >
                Download
              </a>
            </motion.div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section with background image */}
      <section className="relative min-h-screen flex items-center justify-center py-20 pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/photo-1501854140801-50d01698950b")',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0444]/90 via-[#0c0444]/85 to-[#1A1F2C]" />
        <div className="container relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
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
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0c0444]/10" />
        <div className="container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            How NomadNet VPN Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Connect Securely",
                description: "Click connect and NomadNet VPN encrypts your internet traffic, making it unreadable to anyone trying to intercept it.",
              },
              {
                icon: Server,
                title: "Route Through Servers",
                description: "Your traffic is routed through our secure servers in Mongolia, allowing you to access local content safely.",
              },
              {
                icon: ShieldIcon,
                title: "Browse Privately",
                description: "With your real IP address hidden and your data encrypted, browse the internet with complete privacy and freedom.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#2A2F3C]/80 backdrop-blur-sm p-8 rounded-xl hover:bg-[#2A2F3C] transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="w-12 h-12 text-[#9b87f5] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section (Why Choose NomadNet?) */}
      <section id="features" className="py-20 bg-[#1A1F2C]/50">
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
                description: "Seamlessly access Mongolian government services, banking, and local content.",
              },
              {
                icon: Zap,
                title: "Fast Speeds",
                description: "Optimized servers ensure low latency and high-speed browsing.",
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "No-logs policy and end-to-end encryption for your peace of mind.",
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
                className="bg-[#2A2F3C] p-6 rounded-xl hover:bg-[#2A2F3C]/80 transition-colors relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-12 h-12 text-[#9b87f5] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Footer */}
      <footer className="py-8 bg-[#1A1F2C] text-gray-300">
        <div className="container text-center">
          <p className="mb-4">© 2024 NomadNet. All Rights Reserved.</p>
          <div className="flex justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#9b87f5] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-[#9b87f5] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
