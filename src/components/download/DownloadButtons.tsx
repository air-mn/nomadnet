import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Button
        size="lg"
        className="bg-primary hover:bg-secondary text-white px-8 transition-colors duration-300"
      >
        <Apple className="mr-2 h-5 w-5" /> Download for iOS
      </Button>
      <Button
        size="lg"
        className="bg-primary hover:bg-secondary text-white px-8 transition-colors duration-300"
      >
        <Smartphone className="mr-2 h-5 w-5" /> Download for Android
      </Button>
    </div>
  );
};

export default DownloadButtons;