import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import primeHavenVideo from "../assets/videos/PrimeHavenVideo.mp4";
import primeHavenImage from "../assets/images/PrimeHaven.png";
import ticTacToeVideo from "../assets/videos/TicTacToeVideo.mp4";
import ticTacToeImage from "../assets/images/TicTacToe.png";

const Projects = () => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      entry?.target.classList.add("show");
    } else {
      entry?.target.classList.remove("show");
    }
  }, [inView]);

  useEffect(() => {
    const projects = document.querySelectorAll(".projects");

    projects.forEach((project) => {
      project.addEventListener("mouseover", (e) => {
        const img = project.children[0];
        const video = project.children[1];
        const buttonDiv = project.children[2];

        img.classList.add("hidden");
        video.classList.remove("hidden");
        buttonDiv.classList.remove("hidden");

        video.play();
      });

      project.addEventListener("mouseout", (e) => {
        const img = project.children[0];
        const video = project.children[1];
        const buttonDiv = project.children[2];

        img.classList.remove("hidden");
        video.classList.add("hidden");
        buttonDiv.classList.add("hidden");

        video.pause();
      });
    });
  }, []);

  return (
    <div
      id="Projects"
      ref={ref}
      className="h-dvh pt-[12dvh] opacity-0 -translate-x-[20vw]"
    >
      <h2 className="text-[2rem] text-center h-[10dvh]">
        <mark className="text-white bg-[#a300cc] inline-block leading-[0em] pb-[0.5em]">
          Projects
        </mark>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center mt-2">
        {/* PrimeHaven Project */}
        <div className="projects bg-black relative w-[90dvw] lg:w-[55dvw] h-[40dvh] lg:h-[63dvh]">
          <img
            src={primeHavenImage}
            alt="PrimeHaven Project Image"
            className="object-fill w-full h-[25dvh] lg:h-full rounded-3xl opacity-65"
          />

          <video
            className="object-fill w-full h-[25dvh] lg:h-full rounded-3xl hidden opacity-60"
            loop
            muted
            autoPlay
          >
            <source src={primeHavenVideo} type="video/mp4" />
          </video>

          <div className="absolute top-[10dvh] lg:top-[28dvh] left-[27dvw] lg:left-[21dvw] hidden">
            <button
              type="button"
              className="bg-white text-black py-3 px-8 rounded-full font-medium"
            >
              <Link
                to="https://github.com/Munadil16/PrimeHaven"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Code </>`}
              </Link>
            </button>
          </div>

          <div className="text-white relative -top-20 lg:-top-28 pl-4">
            <p className="text-[1.875rem] lg:text-[2.8rem] font-medium">
              Short-term Rentals
            </p>
            <p className="text-sm lg:text-[0.95rem]">
              Buy and Sell Properties for Rent
            </p>
          </div>

          <div className="relative -top-12 lg:-top-[4.5rem] flex flex-wrap gap-2">
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              React
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              Node.js
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              Express
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              PostgreSQL
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              CSS
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              Stripe
            </p>
          </div>
        </div>

        {/* TicTacToe Project */}
        <div className="projects bg-black relative w-[90dvw] lg:w-[22dvw] h-[40dvh] lg:h-[63dvh]">
          <img
            src={ticTacToeImage}
            alt="TicTacToe Project Image"
            className="object-fill w-full h-[25dvh] lg:h-full rounded-3xl opacity-65"
          />

          <video
            className="object-cover w-full h-[25dvh] lg:h-full rounded-3xl hidden opacity-60"
            loop
            muted
            autoPlay
          >
            <source src={ticTacToeVideo} type="video/mp4" />
          </video>

          <div className="absolute top-[10dvh] lg:top-[28dvh] left-[14dvw] lg:left-[1.5dvw] hidden">
            <button
              type="button"
              className="bg-white text-black font-medium py-3 px-8 mr-4 rounded-full"
            >
              <Link
                to="https://github.com/Munadil16/Tic-Tac-Toe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Code </>`}
              </Link>
            </button>

            <button
              type="button"
              className="bg-white text-black font-medium py-3 px-8 rounded-full"
            >
              <Link
                to="https://munadil16.github.io/Tic-Tac-Toe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </button>
          </div>

          <div className="text-white relative -top-20 lg:-top-28 pl-4">
            <p className="text-[1.875rem] lg:text-[2.8rem] font-medium">
              Tic-Tac-Toe
            </p>
            <p className="text-sm lg:text-[0.95rem]">
              Classic Tic-Tac-Toe Game
            </p>
          </div>

          <div className="relative -top-12 lg:-top-[4.5rem] flex flex-wrap gap-2">
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              HTML
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">
              CSS
            </p>
            <p className="text-white bg-[#461656] py-2 px-6 rounded-full">JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
