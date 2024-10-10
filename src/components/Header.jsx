import { useLocation,Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import csilogo from "../assets/csilogo.webp"
import { navigation } from "../constants/public_objects";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={csilogo} width={60} height={40} alt="Brainwave" />
        </a>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:bg-transparent lg:items-center lg:justify-center`}
        >
          <div className="lg:ml-[100px] flex flex-col lg:flex-row items-center justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block font-code lg:text-[1rem] uppercase text-n-1/50 transition-colors hover:text-n-1 px-6 py-6 md:py-8 lg:px-4 lg:py-0 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  item.url === pathname.hash ? "lg:text-n-1" : "lg:text-n-1/50"
                }`}
              >
                {item.title}
              </a>
            ))}
            {/* Extra Links */}
            <Link
              className="hidden lg:inline-block text-n-1/50 transition-colors font-code hover:text-n-1 text-[1rem] ml-4"
              to="/team"
            >
              TEAM
            </Link>
            <Link
              className="hidden lg:inline-block text-n-1/50 transition-colors font-code hover:text-n-1 text-[1rem] ml-4"
              to="/gallery"
            >
              PHOTOS
            </Link>
            <Link
              className="hidden lg:inline-block text-n-1/50 transition-colors hover:text-n-1 font-code text-[1rem] ml-4"
              to="/eventpg"
            >
              EVENTS
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <HamburgerMenu />
        </nav>

        {/* CTA Button (Ask Anything) */}
        <Button className="hidden lg:flex ml-auto" href="/#contact">
          Ask Anything
        </Button>

        {/* Mobile Menu Button */}
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};



export default Header;
