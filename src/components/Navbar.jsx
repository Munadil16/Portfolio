import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import menuOpenIcon from "../assets/images/MenuOpen.webp";
import menuCloseIcon from "../assets/images/MenuClose.webp";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(menuOpenIcon);

  const handleMenuClick = () => {
    setMenuIcon((prevIcon) =>
      prevIcon == menuOpenIcon ? menuCloseIcon : menuOpenIcon
    );
    document.querySelector("#menu-bar-items").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  };

  const classForLinks = "text-white hover:text-purple-700 hidden lg:block";
  const classForMobileLinks = "text-white block p-4 text-2xl";

  return (
    <>
      <nav className="flex items-center p-8 h-[12dvh] sticky top-0 z-40 bg-black">
        <div className="w-3/4 lg:w-1/3">
          <HashLink
            to="#top"
            className="text-white text-2xl font-medium"
            smooth
          >
            <span className="text-purple-700">&lt;</span> Munadil
            <span className="text-purple-700"> &#47;&gt;</span>
          </HashLink>
        </div>

        <div className="flex justify-end lg:justify-center lg:gap-16 w-1/2 lg:w-3/5 text-xl">
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
            src={menuIcon}
            alt="Menu icon"
            className="w-10 cursor-pointer lg:hidden"
            onClick={handleMenuClick}
          />
        </div>
      </nav>

      {/* Menubar Items */}
      <div
        id="menu-bar-items"
        className="hidden lg:hidden pl-10 h-[88dvh] w-dvw fixed top-[12dvh] z-40 bg-black"
      >
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
