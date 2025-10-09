import HeroDiv from "./HeroDiv";
import Infinitewords from "./Infinitewords";

function Hero() {
  const Line = [
    "※ Tailored Solutions",
    "※ Intuitive Experience",
    "※ Scalable Technology",
    "※ Transparent Process",
    "※ Proven Results",
  ];

  return (
    <HeroDiv>
      <div className="scale-90 flex flex-col justify-center items-center text-center my-[20vh]">
        <h1 className="text-[1.7rem] md:text-6xl font-bold text-white leading-tight mb-4 animation-duration-initial animate-typing">
          Your Trusted Creative <br /> Partner for Digital Success
        </h1>
        <p className="text-sm md:text-xl text-white text-center mb-8 max-w-2xl font-serif">
          We deliver impactful branding, web design, and UI/UX solutions to
          elevate your online presence and make your brand stand out.
        </p>

        <a
          className="group bg-[#22282d] text-white font-bold py-3 px-8 rounded-full m-2  hover:bg-gray-100 hover:text-black active:bg-gray-100 active:text-black transition-all duration-300 flex gap-2 ease-linear"
          href="#Contact"
        >
          Start a Project{" "}
          <p className="rotate-30 group-hover:rotate-60 group-active:rotate-60 transition-all duration-100">
            {" "}
            🤚{" "}
          </p>
        </a>
      </div>
      <div className="overflow-hidden w-full">
        <Infinitewords bottomLine={Line} />
      </div>
    </HeroDiv>
  );
}

export default Hero;
