
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="text-white hover:bg-custom-purple/40 hover:text-custom-orange"
    >
      {language === "es" ? "EN" : "ES"}
    </Button>
  );
};

export default LanguageSwitcher;
