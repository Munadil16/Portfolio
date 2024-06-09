import aboutMeIllustration from "../assets/images/AboutMe.png";

const AboutMe = () => {
  const highlightClasses = "text-[#DF00FF] font-medium text-xl lg:text-2xl";

  return (
    <div id="AboutMe" className="h-dvh pt-[12dvh] sm:mb-24 lg:mb-0">
      <h2 className="text-[2rem] text-center">
        <mark className="text-white bg-[#a300cc] inline-block leading-[0em] pb-[0.5em]">
          About me
        </mark>
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-16">
        <div className="w-[70%] sm:w-96 lg:w-[425px]">
          <img src={aboutMeIllustration} alt="About Me Illustration" />
        </div>

        <div className="text-white w-5/6 sm:w-2/5 lg:w-1/2 leading-7 sm:tracking-wider">
          <p className="text-[1.1rem] lg:text-[1.2rem] mb-8 indent-16">
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
