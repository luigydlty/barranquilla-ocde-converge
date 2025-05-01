
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

const Index = () => {
  return (
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
  );
};

export default Index;
