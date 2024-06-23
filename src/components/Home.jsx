import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TypewriterText from "./TypewriterText";
import codingIllustration from "../assets/images/Coding.webp";

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
      className="flex flex-col lg:flex-row items-center justify-center sm:gap-4 h-[90dvh] lg:h-[78dvh] scroll-mt-[12dvh] opacity-0 translate-x-[-20dvw]"
      ref={ref}
    >
      <div className="w-11/12 lg:w-1/2 h-[45%] sm:h-fit text-center lg:text-left">
        <h1 className="text-white text-[2.5rem] mb-6">
          Hi there! I'm{" "}
          <span className="font-semibold bg-gradient-to-r from-[#cf00cc] from-30% to-[#b200f8] to-100% text-transparent bg-clip-text">
            Munadil.
          </span>
        </h1>
        <TypewriterText />
      </div>

      <div className="w-[70%] sm:w-[450px]">
        <img src={codingIllustration} alt="Coding Illustration" />
      </div>
    </div>
  );
};

export default Home;
