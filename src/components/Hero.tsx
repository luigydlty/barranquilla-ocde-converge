
import { Button } from '@/components/ui/button';
import Countdown from '@/components/Countdown';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-28 pb-24 md:pb-32" style={{
    backgroundImage: 'linear-gradient(rgba(73, 34, 89, 0.9), rgba(73, 34, 89, 0.9))',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/lovable-uploads/fedc6e21-dd9b-45fb-bb0c-847feb94796e.png" alt="Vista aérea de Barranquilla" className="w-full h-full object-cover" />
      </div>
      
      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 mt-12 md:mt-16 animate-fade-in lg:text-6xl">
            {t("homeTitle")}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-3xl mb-3 md:mb-4 animate-fade-up text-white font-bold">
            {t("homeSubtitle")}
          </p>
          
          <p className="text-base sm:text-lg mb-8 md:mb-10 animate-fade-up md:text-xl text-slate-50 font-extrabold">
            {t("dateLocation")}
          </p>
          
          <div className="flex justify-center mb-8 md:mb-12">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90 text-white font-bold text-base md:text-lg px-6 py-5 md:px-8 md:py-6">
              {t("register")}
            </Button>
          </div>
          
          <div className="mt-8 md:mt-10 mb-12 md:mb-16">
            <Countdown targetDate="2025-07-08T09:00:00" />
          </div>
        </div>
      </div>
      
      {/* Decorative wave effect at bottom with increased height to cover countdown */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 320L60 293.3C120 266.7 240 213.3 360 186.7C480 160 600 160 720 173.3C840 186.7 960 213.3 1080 226.7C1200 240 1320 240 1380 240L1440 240V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V320Z" fill="white" />
        </svg>
      </div>
    </section>;
};
export default Hero;
