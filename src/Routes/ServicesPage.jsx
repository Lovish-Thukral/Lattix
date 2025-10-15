import HeroDiv from "../components/HeroDiv";
import { ArrowBigDown } from "lucide-react";
import Services from "../components/Services";
import BrandBundels from "../components/BrandBundels";
import FAQSection from "../components/Faq-Section";

const ServicesPage = () => {
  return (
    <div>
      <HeroDiv>
        <div
          className="flex flex-col justify-center items-center text-center my-[25vh]"
          id="NavHero"
        >
          <h1 className="text-[1.7rem] md:text-6xl font-bold text-white leading-tight animation-duration-initial animate-typing">
            Explore Our Services
          </h1>
          <p className="text-sm md:text-xl text-white text-center mb-8 mt-[30vh] max-w-2xl font-serif">
            Solutions to Help Your Brand <br /> Stand Out and Grow.
          </p>
          <a
            className="rounded-full border-2 border-white h-14 w-14 flex items-center justify-center animate-bounce mt-10"
            href="#serv"
          >
            <ArrowBigDown className="h-9 text-white" />
          </a>
        </div>
      </HeroDiv>
      <div id="serv">
        <Services />
        <FAQSection />
        <BrandBundels />

      </div>
    </div>
  );
};

export default ServicesPage;
