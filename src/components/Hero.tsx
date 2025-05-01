
import { Button } from '@/components/ui/button';
import Countdown from '@/components/Countdown';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(73, 34, 89, 0.8), rgba(73, 34, 89, 0.8)), url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute right-0 top-20 w-1/2 h-4/5 opacity-30">
        <img 
          src="/lovable-uploads/a00f706c-6081-4ddf-af65-b701d27d0db3.png" 
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
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 180L60 165C120 150 240 120 360 105C480 90 600 90 720 97.5C840 105 960 120 1080 127.5C1200 135 1320 135 1380 135L1440 135V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0V180Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
