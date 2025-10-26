import HeroDiv from "../components/HeroDiv";
import Downbutton from "../components/ui/Downbutton";
import Services from "../components/Services";
import BrandBundels from "../components/BrandBundels";
import FAQSection from "../components/Faq-Section";
import ContactUs from "../components/ContactUs";

const ServicesPage = () => {
  return (
    <div>
      <HeroDiv>
        <div
          className="flex flex-col justify-center items-center text-center mt-[25vh]"
          id="NavHero"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animation-duration-initial animate-typing">
            Explore Our Services
          </h1>
          <p className="text-lg md:text-xl text-white text-center sm:mt-[30vh] mt-8 max-w-2xl font-serif">
            Solutions to Help Your Brand <br /> Stand Out and Grow.
          </p>
          <Downbutton id={"#serv"} />
        </div>
      </HeroDiv>
      <div id="serv">
        <Services />
        <BrandBundels />
        <FAQSection />
        <ContactUs />
      </div>
    </div>
  );
};

export default ServicesPage;
