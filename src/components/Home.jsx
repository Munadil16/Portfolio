import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TypewriterText from "./TypewriterText";
import codingIllustration from "../assets/images/Coding.png";

const Home = () => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      entry?.target.classList.add("show");
    } else {
      entry?.target.classList.remove("show");
    }
  }, [inView]);

  return (
    <div
      id="Home"
      className="flex flex-col sm:flex-row items-center justify-center sm:gap-4 h-[88dvh] sm:h-dvh pt-[6dvh] sm:pt-0 opacity-0 translate-x-[-20vw]"
      ref={ref}
    >
      <div className="w-11/12 sm:w-2/5 lg:w-1/2 h-2/5 text-center sm:text-left">
        <p className="text-white text-[2.5rem] font-lg mb-6">
          Hi there! I'm{" "}
          <span className="font-semibold bg-gradient-to-r from-[#cf00cc] from-30% to-[#b200f8] to-100% text-transparent bg-clip-text">
            Munadil.
          </span>
        </p>
        <TypewriterText />
      </div>

      <div className="w-[70%] sm:w-80 lg:w-[450px]">
        <img src={codingIllustration} alt="Coding Illustration" />
      </div>
    </div>
  );
};

export default Home;
