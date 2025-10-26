import OurSelf from "../components/ourSelf";
import Services from "../components/Services"; 
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <div>
      <Hero />
      <OurSelf />
      <Projects/>
      <Services />
      <ContactUs/>
    </div>
  );
}

export default HomePage;
