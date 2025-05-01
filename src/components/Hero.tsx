
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white font-medium text-sm md:text-base">
              Barranquilla, Colombia | 8-11 Julio 2025
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Foro de Desarrollo Local de la OCDE
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up">
            El evento internacional que reúne a líderes para impulsar el desarrollo local sostenible
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-barranquilla-red hover:bg-barranquilla-red/90">
              Registro
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="#about" className="group">
                Más información
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg flex gap-4 items-center">
              <div className="text-center">
                <p className="text-white text-sm">Organiza</p>
                <p className="text-white font-bold">Alcaldía de Barranquilla</p>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div className="text-center">
                <p className="text-white text-sm">En colaboración con</p>
                <p className="text-white font-bold">OCDE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave effect at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
