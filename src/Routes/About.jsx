import HeroDiv from "../components/HeroDiv";
import { motion } from "framer-motion";
import img from "../assets/thumbsup.png";
import { useState } from "react";
import ApproachSection from "../components/ApproachSection";
import ContactUs from "../components/ContactUs";
import Downbutton from "../components/ui/Downbutton";

const About = () => {
  const [ishovered, hovered] = useState(false);
  const values = [
    {
      num: "01",
      title: "Trust",
      description:
        "Trust forms the bedrock of our relationships. We prioritize transparency, reliability, and integrity in all our interactions, fostering trust with our clients and partners alike.",
    },
    {
      num: "02",
      title: "Communication",
      description:
        "Effective communication is key to our process. We believe in open dialogue, active listening, and clear, concise messaging to ensure that everyone is on the same page and that ideas are understood and valued.",
    },
    {
      num: "03",
      title: "Integrity",
      description:
        "We hold your authenticity in high regard and appreciate honesty. Our commitment to transparency stems from our deep respect for our stakeholders and the highest working standards.",
    },
    {
      num: "04",
      title: "Lasting Relationships",
      description:
        "Through trust, communication, and integrity, we ensure that every project is a successful and rewarding experience for all involved.",
    },
  ];

  return (
    <div>
      <HeroDiv>
        <div
          className="scale-90 flex flex-col justify-center items-center text-center mt-[25vh] not-md:mt-[22vh]"
          id="NavHero"
        >
          <h1 className="text-[1.7rem] md:text-6xl font-bold text-white leading-tight mb-7 animation-duration-initial animate-typing">
            Ignite Your Brand’s Potential,
            <br />
            Powerful Solutions That Work for You
          </h1>
          <p className="text-sm md:text-xl not-md:px-3 text-white text-center mb-16 max-w-2xl font-serif">
            From eye-catching designs to seamless digital experiences, we bring
            your brand to life—online, offline, and everywhere in between.
            <br />
            Let’s craft the story your audience won’t forget.
          </p>
          <Downbutton id={"#cont"} />
        </div>
      </HeroDiv>
      <section className="w-[90%] mx-auto md:px-10 px-2 md:my-16 my-5 text-white grid sm:grid-cols-8 gap-6 items-center">
        <motion.h3
          className="text-xl font-bold col-span-8 sm:col-span-2 mt-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ⁕ Our Mission
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-4xl font-semibold col-span-8 sm:col-span-5 md:px-8 my-8 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => hovered(true)}
          onMouseLeave={() => hovered(false)}
        >
          To create a world made of thoughtful designs and experiences.
        </motion.h1>

        <motion.img
          src={img}
          alt="Mission Illustration"
          className={`hidden col-span-8 sm:col-span-1 justify-self-center md:justify-self-end transition-all duration-300 ${
            ishovered ? "md:block" : "md:hidden"
          } h-[150px] w-[120px] bg-gradient-to-t from-[rgba(3,109,77,0.41)] rounded-lg`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </section>

      <div
        className="h-fit w-[90%] bg-[rgb(25,26,26)] flex-1 justify-center items-center md:px-16 px-6 md:py-[10vh] py-18 bg-cover text-white bg-no-repeat bg-center mx-auto my-14 rounded-[3rem]"
        id="cont"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-4xl font-bold mb-20 text-center md:text-left bebas-neue-regular font-stretch-125% "
        >
          Our values and commitments
        </motion.h2>

        {/* Values List */}
        <div className="flex flex-col gap-12 md:px-16">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8"
            >
              {/* Number + Title */}
              <div className="md:w-1/3 flex not-md:justify-between items-center gap-16">
                <span className="text-white font-bold text-2xl md:text-3xl not-md:mb-6">
                  {val.num}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {val.title}
                </h3>
              </div>

              {/* Description */}
              <p className="md:w-2/4 text-gray-300">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <ApproachSection />
      <ContactUs />
    </div>
  );
};

export default About;
