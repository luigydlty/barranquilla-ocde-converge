
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Speakers from "@/components/Speakers";
import Venue from "@/components/Venue";
import MediaGallery from "@/components/MediaGallery";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <NavBar />
        <Hero />
        <About />
        <Agenda />
        <Speakers />
        <Venue />
        <MediaGallery />
        <Registration />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
