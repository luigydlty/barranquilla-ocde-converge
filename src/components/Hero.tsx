
import { Button } from '@/components/ui/button';
import Countdown from '@/components/Countdown';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(73, 34, 89, 0.8), rgba(73, 34, 89, 0.8))',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="/lovable-uploads/fedc6e21-dd9b-45fb-bb0c-847feb94796e.png" 
          alt="Vista aérea de Barranquilla" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Foro de Desarrollo Local de la OCDE
          </h1>
          
          <div className="mb-8 text-white/90 text-lg md:text-xl font-medium">
            Barranquilla, Colombia | 8-11 Julio 2025
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up">
            El evento internacional que reúne a líderes para impulsar el desarrollo local sostenible
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90 text-white">
              Regístrate al Evento Aquí
            </Button>
          </div>
          
          <div className="mt-10">
            <Countdown targetDate="2025-07-08T09:00:00" />
          </div>
        </div>
      </div>
      
      {/* Decorative wave effect at bottom with increased height */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 240L60 220C120 200 240 160 360 140C480 120 600 120 720 130C840 140 960 160 1080 170C1200 180 1320 180 1380 180L1440 180V240H1380C1320 240 1200 240 1080 240C960 240 840 240 720 240C600 240 480 240 360 240C240 240 120 240 60 240H0V240Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
