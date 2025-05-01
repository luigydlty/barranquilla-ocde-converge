
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Info, Users, MapPin, Mail, Pencil, Home, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home", icon: <Home className="h-5 w-5" /> },
    { name: "Sobre el Foro", href: "#about", icon: <Info className="h-5 w-5" /> },
    { name: "Programa", href: "#agenda", icon: <Calendar className="h-5 w-5" /> },
    { name: "Ponentes", href: "#speakers", icon: <Users className="h-5 w-5" /> },
    { name: "Información Práctica", href: "#venue", icon: <MapPin className="h-5 w-5" /> },
    { name: "Galería", href: "#media", icon: <Image className="h-5 w-5" /> },
    { name: "Registro", href: "#registration", icon: <Pencil className="h-5 w-5" /> },
    { name: "Contacto", href: "#contact", icon: <Mail className="h-5 w-5" /> }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-custom-darkPurple/95 shadow-md py-2' : 'bg-custom-darkPurple/80 py-4 backdrop-blur-sm'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                OCDE 2025
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:bg-custom-purple/30 hover:text-custom-orange"
              >
                {item.name}
              </a>
            ))}
            <Button className="ml-4 bg-custom-orange hover:bg-custom-orange/80 text-white font-semibold">
              Regístrate Ahora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-custom-darkPurple shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-custom-purple/30 hover:text-custom-orange"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-custom-orange hover:bg-custom-orange/80 text-white font-semibold">
                Regístrate Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
