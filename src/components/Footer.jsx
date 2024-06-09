import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center sticky bottom-0 z-40">
      <div className="flex justify-between items-center bg-[#121212] text-white h-[6dvh] sm:h-[8dvh] w-10/12 sm:w-1/2 py-5 px-10 rounded-full mb-3">
        <p>
          Keep in
          <span className="text-[#DF00FF] font-medium text-lg"> touch.</span>
        </p>
        <div className="flex gap-10 text-xl">
          <Link
            to="https://www.linkedin.com/in/munadil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://github.com/Munadil16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
