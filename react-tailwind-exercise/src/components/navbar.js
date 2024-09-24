import { useState } from "react";
import bear from "../assets/bear.png";
import { GrLanguage } from "react-icons/gr";
import { FaXmark , FaBars} from "react-icons/fa6";
import {Link} from "react-scroll"

function NavBar() {
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    function toggleButton(){
      setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
      { link: "overview", path: "home" },
      { link: "features", path: "features" },
      { link: "about", path: "about" },
      { link: "pricing", path: "pricing" },
    ];

    return (
      <>
        <nav className="fixed top-0 left-0 right-0 px-6 bg-[#fff9f5] shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
          <div className="font-sniglet flex items-center justify-between text-base md:w-[100%] w-[90% ">
            <div className="flex items-center md:w-[70%] sm:w-[100%]">
              {/* logo section */}
              <div className="md:w-[25%] sm:w-[50%]">
                <div className="flex w-[160px] items-center">
                  <a href="/">
                    <img className="w-[165px] -mt-[5px]" src={bear} />
                  </a>
                  <span className="-ml-[18px] text-darkBrown font-extrabold text-2xl">
                    bambi
                  </span>
                </div>
              </div>

              {/* nav items  */}
              <div>
                <ul className="gap-6 md:flex md:w-[45%] md:ml-12 sm:w-[50%] hidden">
                  {navItems.map(({ link, path }) => (
                    <li
                      className="flex tracking-widest hover:text-light duration-200 cursor-pointer"
                      key={link}
                    >
                      <Link
                        to={path}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        activeClass="active"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* language and sign up */}
            <div className="space-x-8 hidden w-[30%] justify-end md:flex items-center mr-8 ">
              <a href="/" className="flex items-center gap-2 lg:flex">
                <GrLanguage />
                <span className="hover:text-light duration-200 transition-all">
                  Language
                </span>
              </a>
              <button className="bg-darkBrown rounded-2xl px-6 py-3 text-white transition-all duration-200 hover:bg-light hover:text-black">
                Sign Up
              </button>
            </div>

            {/* menu on mobile device */}
            <div className="md:hidden">
              <button
                onClick={toggleButton}
                className="md:hidden outline-none duration-200 transition-all"
              >
                {isMenuOpen ? (
                  <FaXmark className="w-5 h-w-5 text-green duration-200 transition-all" />
                ) : (
                  <FaBars className="w-5 h-w-5 text-green duration-200 transition-all" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* mobile device menu items */}
        <div
          className={`z-10 md:hidden space-y-3 px-4 pt-24 pb-5 bg-light ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
        >
          {navItems.map(({ link, path }) => (
            <li
              className="flex tracking-widest hover:text-green duration-200 cursor-pointer"
              key={link}
            >
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                activeClass="active"
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      </>
    );
}
export default NavBar;