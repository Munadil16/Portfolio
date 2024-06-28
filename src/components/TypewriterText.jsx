import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const TypewriterText = () => {
  useEffect(() => {
    document
      .querySelector(".Typewriter")
      .classList.add(
        "text-[2.6rem]",
        "font-semibold",
        "inline",
        "bg-gradient-to-r",
        "from-[#cf00cc]",
        "from-30%",
        "to-[#b200f8]",
        "to-100%",
        "text-transparent",
        "bg-clip-text"
      );

    document
      .querySelector(".Typewriter__cursor")
      .classList.add("text-[#b200f8]");
  }, []);

  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Web developer.",
          "Turning ideas into reality.",
          "Designing with code.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,
        delay: 50,
      }}
    />
  );
};

export default TypewriterText;
