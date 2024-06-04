import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import menuOpenIcon from "../assets/images/MenuOpen.png";
import menuCloseIcon from "../assets/images/MenuClose.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
    const menuImg = document.querySelector(".menu-bar-icon");
    const menuItems = document.querySelector(".menu-bar-items");
    menuImg.src = isMenuOpen ? menuOpenIcon : menuCloseIcon;
    menuItems.classList.toggle("hidden");
  };

  const classForLinks = "text-white hover:text-purple-700 sm:block hidden";
  const classForMobileLinks = "text-white block p-4 text-2xl";

  return (
    <>
      <nav className="flex items-center p-8 px-8 h-[12dvh] sticky top-0 z-40 backdrop-blur-lg backdrop-brightness-0">
        <div className="w-1/2 sm:w-1/3">
          <HashLink to="#top" className="text-white text-2xl font-medium">
            <span className="text-purple-700">&lt;</span> Munadil
            <span className="text-purple-700"> &#47;&gt;</span>
          </HashLink>
        </div>

        <div className="flex justify-end sm:justify-around w-1/2 sm:w-2/5 text-xl">
          <HashLink to="#Home" className={classForLinks} smooth>
            Home
          </HashLink>
          <HashLink to="#AboutMe" className={classForLinks} smooth>
            About me
          </HashLink>
          <HashLink to="#Skills" className={classForLinks} smooth>
            Skills
          </HashLink>
          <HashLink to="#Projects" className={classForLinks} smooth>
            Projects
          </HashLink>

          {/* Mobile Menubar Image*/}
          <img
            src={menuOpenIcon}
            alt="Menubar Open Icon"
            className="menu-bar-icon w-9 cursor-pointer sm:hidden"
            onClick={handleMenuClick}
          />
        </div>
      </nav>

      {/* Menubar Items */}
      <div className="menu-bar-items sm:hidden hidden pl-10 h-[88dvh] w-dvw fixed top-auto z-40 bg-black">
        <HashLink
          to="#Home"
          className={classForMobileLinks}
          smooth
          onClick={handleMenuClick}
        >
          Home
        </HashLink>
        <HashLink
          to="#AboutMe"
          className={classForMobileLinks}
          smooth
          onClick={handleMenuClick}
        >
          About me
        </HashLink>
        <HashLink
          to="#Skills"
          className={classForMobileLinks}
          smooth
          onClick={handleMenuClick}
        >
          Skills
        </HashLink>
        <HashLink
          to="#Projects"
          className={classForMobileLinks}
          smooth
          onClick={handleMenuClick}
        >
          Projects
        </HashLink>
      </div>
    </>
  );
};

export default Navbar;
