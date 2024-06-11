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
  FaWindows,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
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
      id="Skills"
      className="h-dvh pt-[12dvh] opacity-0 -translate-x-[20vw]"
      ref={ref}
    >
      <h2 className="text-[2rem] text-center h-[10dvh]">
        <mark className="text-white bg-[#a300cc] inline-block leading-[0em] pb-[0.5em]">
          Skills
        </mark>
      </h2>

      <div className="flex flex-col items-center gap-5 mt-2 text-white text-6xl">
        {/* Webdev Skills */}
        <div className="flex gap-x-10 gap-y-0 sm:gap-20 flex-wrap items-center justify-center w-[92dvw] h-[23dvh] sm:h-[30dvh] bg-[#121212] rounded-3xl p-2">
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
          <RiTailwindCssFill />
          <FaNode />
          <SiExpress />
          <FaGitAlt />
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          {/* Tools */}
          <div className="flex gap-x-10 gap-y-0 sm:gap-16 flex-wrap items-center justify-center w-[92dvw] sm:w-[44.25dvw] h-[23dvh] sm:h-[30dvh] bg-[#121212] rounded-3xl p-2">
            <FaWindows />
            <VscVscode />
            <FaGithub />
            <SiPostman />
            <SiVercel />
          </div>
          {/* Database */}
          <div className="flex gap-x-10 sm:gap-20 items-center justify-center w-[92dvw] sm:w-[44.25dvw] h-[23dvh] sm:h-[30dvh] bg-[#121212] rounded-3xl p-2">
            <SiPostgresql />
            <SiMongodb />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
