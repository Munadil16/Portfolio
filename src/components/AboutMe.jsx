import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aboutMeIllustration from "../assets/images/AboutMe.webp";

const AboutMe = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      entry?.target.classList.add("show");
    } else {
      entry?.target.classList.remove("show");
    }
  }, [inView]);

  const highlightClasses = "text-[#DF00FF] font-medium text-xl lg:text-2xl";

  return (
    <div
      id="AboutMe"
      className="h-fit lg:h-[78dvh] scroll-mt-[12dvh] mb-[5dvh] lg:mb-0 opacity-0 -translate-x-[20dvw]"
      ref={ref}
    >
      <h2 className="text-[2rem] text-center">
        <mark className="text-white bg-[#a300cc] inline-block leading-[0em] pb-[0.5em]">
          About me
        </mark>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
        <div className="w-[70%] sm:w-[425px]">
          <img src={aboutMeIllustration} alt="About Me Illustration" />
        </div>

        <div className="text-white w-5/6 lg:w-1/2 leading-7 sm:tracking-wider">
          <p className="text-[1.1rem] sm:text-[1.2rem] mb-8 indent-16">
            Hello <span className={highlightClasses}>W</span>
            orld! I'm <span className={highlightClasses}>Munadil</span> from
            Madurai, Tamil Nadu, India. I graduated with a B.Sc. in Computer
            Science. My journey in{" "}
            <span className={highlightClasses}>web development </span>
            began when I was introduced to HTML and CSS during my college years.
            Since then, I've{" "}
            <span className={highlightClasses}>fallen in love </span>
            with it and the endless possibilities it offers.
          </p>

          <p className="text-[1.3rem] mb-4">
            Outside of <span className={highlightClasses}>Coding:</span>
          </p>
          <p className="text-[1.1rem] sm:text-[1.2rem] indent-16">
            When I'm not coding, you can find me exploring the latest tech
            trends, listening to songs, and watching sports or anime. I believe
            that a balanced life fuels{" "}
            <span className={highlightClasses}>
              creativity and productivity.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
