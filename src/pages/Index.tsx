import { motion } from "framer-motion";
import { Shield, Zap, Lock, Smartphone, Globe, Server, Shield as ShieldIcon } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import DownloadButtons from "@/components/download/DownloadButtons";
import PricingSection from "@/components/pricing/PricingSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section with Enhanced VPN Background */}
      <section className="relative min-h-screen flex items-center justify-center py-20 pt-32 overflow-hidden">
        {/* Primary VPN/Tech Background Images - More Visible */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')",
              backgroundBlendMode: "overlay"
            }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')",
              backgroundBlendMode: "multiply"
            }}
          />
        </div>
        
        {/* Enhanced animated overlay patterns */}
        <div className="absolute inset-0 vpn-pattern opacity-60" />
        <div className="absolute inset-0 network-lines opacity-50" />
        
        {/* Reduced gradient overlay to show more background */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet/80 via-violet/70 to-violet/80 z-1" />
        
        <div className="container relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              NomadNet - Mongol VPN
            </h1>
            <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto">
              Stay Connected to Mongolia, Wherever You Are!
            </p>
            <DownloadButtons />
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section with Enhanced Laptop Background */}
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        {/* Laptop/Programming Background - More Visible */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
        </div>
        
        <div className="absolute inset-0 security-grid opacity-70" />
        <div className="absolute inset-0 bg-violet/75 z-1" />
        
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
      
      {/* Features Section with Enhanced Code Background */}
      <section id="features" className="py-20 relative overflow-hidden">
        {/* Programming/Security Background - More Visible */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')",
            }}
          />
        </div>
        
        <div className="absolute inset-0 circuit-pattern opacity-60" />
        <div className="absolute inset-0 bg-violet/70 z-1" />
        
        <div className="container relative z-10">
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
      <footer className="py-8 bg-violet text-accent">
        <div className="container text-center">
          <p className="mb-4">© 2024 NomadNet. All Rights Reserved.</p>
          <div className="flex justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
