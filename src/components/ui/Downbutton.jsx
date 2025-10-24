import { ArrowBigDown } from "lucide-react";

const Downbutton = ({ id }) => {
  return (
    <a
      className="rounded-full border-2 border-white h-14 w-14 flex items-center justify-center animate-bounce mt-10 not-md:mt-28"
      href={id}
    >
      <ArrowBigDown className="h-9 text-white" />
    </a>
  );
};

export default Downbutton;
