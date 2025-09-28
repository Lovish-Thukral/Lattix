import OurSelf from "../components/ourSelf";
import Services from "../components/Services"; 
import Team from "../components/Team"; 
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <>
      <Hero />
      <OurSelf />
      <Projects/>
      <Services />
      <Team />
    </>
  );
}

export default HomePage;
