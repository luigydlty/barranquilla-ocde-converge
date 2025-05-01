
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Agenda from "@/components/Agenda";
import Venue from "@/components/Venue";
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
      <Venue />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
