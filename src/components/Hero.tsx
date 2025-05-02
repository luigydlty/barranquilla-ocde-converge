import { Button } from '@/components/ui/button';
import Countdown from '@/components/Countdown';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24" style={{
    backgroundImage: 'linear-gradient(rgba(73, 34, 89, 0.9), rgba(73, 34, 89, 0.9))',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/lovable-uploads/fedc6e21-dd9b-45fb-bb0c-847feb94796e.png" alt="Vista aérea de Barranquilla" className="w-full h-full object-cover" />
      </div>
      
      <div className="container-custom relative z-10 my-8 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-8 animate-fade-in">
            Foro de Desarrollo Local de la OCDE
          </h1>
          
          <div className="mb-8 text-white text-lg md:text-xl font-medium">Barranquilla 8-11 Julio 2025</div>
          
          <p className="text-xl md:text-2xl mb-10 animate-fade-up text-slate-100 font-bold">
            El evento internacional que reúne a líderes para impulsar el desarrollo local sostenible
          </p>
          
          <div className="flex justify-center mb-12">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90 text-white font-bold text-lg px-8 py-6">
              Regístrate al Evento Aquí
            </Button>
          </div>
          
          <div className="mt-10 mb-16">
            <Countdown targetDate="2025-07-08T09:00:00" />
          </div>
        </div>
      </div>
      
      {/* Decorative wave effect at bottom with increased height */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 320L60 293.3C120 266.7 240 213.3 360 186.7C480 160 600 160 720 173.3C840 186.7 960 213.3 1080 226.7C1200 240 1320 240 1380 240L1440 240V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V320Z" fill="white" />
        </svg>
      </div>
    </section>;
};
export default Hero;