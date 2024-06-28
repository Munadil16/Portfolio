import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
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

  return (
    <div
      id="Skills"
      className="h-fit scroll-mt-[12dvh] mb-[5dvh] opacity-0 -translate-x-[20dvw]"
      ref={ref}
    >
      <h2 className="text-[2rem] text-center">
        <mark className="text-white bg-[#a300cc] inline-block leading-[0em] pb-[0.5em]">
          Skills
        </mark>
      </h2>

      <div className="flex flex-col items-center gap-5 mt-6 text-white text-5xl md:text-6xl">
        {/* Webdev Skills */}
        <div className="p-3 rounded-3xl bg-[#121212]">
          <p className="text-center text-xl md:text-2xl font-medium mt-2">
            Language / Framework
          </p>
          <div className="flex flex-wrap items-center justify-center content-center gap-7 md:gap-y-8 md:gap-x-20 w-[90dvw] h-[24dvh] md:h-[28dvh]">
            <FaHtml5 />
            <FaCss3 />
            <FaJs />
            <FaReact />
            <RiTailwindCssFill />
            <FaNode />
            <SiExpress />
            <FaGitAlt />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="p-3 rounded-3xl bg-[#121212]">
            <p className="text-center text-xl md:text-2xl font-medium mt-2">
              Tools
            </p>
            <div className="flex flex-wrap items-center justify-center content-center gap-7 md:gap-y-8 md:gap-x-20 w-[90dvw] md:w-[43.25dvw] h-[16dvh] md:h-[24dvh]">
              <VscVscode />
              <FaGithub />
              <SiPostman />
              <SiVercel />
            </div>
          </div>

          <div className="p-3 rounded-3xl bg-[#121212]">
            <p className="text-center text-xl md:text-2xl font-medium mt-2">
              Database
            </p>
            <div className="flex items-center justify-center gap-7 md:gap-y-8 md:gap-x-20 w-[90dvw] md:w-[43.25dvw] h-[16dvh] md:h-[24dvh]">
              <SiPostgresql />
              <SiMongodb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
