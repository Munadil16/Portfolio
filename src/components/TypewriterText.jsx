import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <Typewriter // add css color to text
      options={{
        strings: [
          "Passionate about coding.",
          "Turning ideas into reality.",
          "Designing with code.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypewriterText;
