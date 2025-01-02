import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-violet backdrop-blur-sm border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a
              href="#features"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-primary transition-colors duration-200"
            >
              Pricing
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;