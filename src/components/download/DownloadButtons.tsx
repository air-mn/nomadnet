import { Button } from "@/components/ui/button";

const DownloadButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Button
        size="lg"
        className="bg-primary hover:bg-secondary text-white px-8 transition-colors duration-300"
      >
        <img 
          src="/lovable-uploads/20069d79-1c9c-45a8-aad1-fdf45f016f2b.png" 
          alt="Apple App Store" 
          className="mr-2 h-5 w-5"
        /> 
        Download for iOS
      </Button>
      <Button
        size="lg"
        className="bg-primary hover:bg-secondary text-white px-8 transition-colors duration-300"
      >
        <img 
          src="/lovable-uploads/3d085d12-61ae-47dd-bd0f-e6fc227dc362.png" 
          alt="Google Play Store" 
          className="mr-2 h-5 w-5"
        /> 
        Download for Android
      </Button>
    </div>
  );
};

export default DownloadButtons;