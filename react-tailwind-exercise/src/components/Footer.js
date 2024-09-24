import bear from "../assets/bear.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#ffeed3] md:px-14 p-4 mx-auto shadow-[0_0_8px_0_rgba(0,0,0,0.3)]">
      {/* information section */}
      <div className="my-5 flex flex-col md:flex-row gap-10">
        {/* logo section of footer */}
        <div className="md:w-1/2 space-y-3">
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
          <p className="w-[42%]">
            Everything You Need to Get Started with Web Designing. Start it with
            Bambi ^^.
          </p>
          <div>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="bg-green py-2 px-2 rounded-md focus:outline-none placeholder:text-[14px] placeholder:text-white text-white"
            />
            <input
              type="submit"
              value="subscribe"
              className="bg-lime-600 px-2 py-2 rounded-md cursor-pointer hover:bg-greenHover ml-[-6px]"
            />
          </div>
        </div>

        {/* footer cols  */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between items-start md:gap-10 gap-3">
          <div>
            <h4 className="text-2xl text-amber-950 md:mb-8 mb-2">Main</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="">
                  Overview
                </a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl text-amber-950 md:mb-8 mb-2">Help</h4>
            <ul className="space-y-5">
              <li>
                <a href="#" className="">
                  How does it works?
                </a>
              </li>
              <li>
                <a href="#">Where to ask question?</a>
              </li>
              <li>
                <a href="#">How to play?</a>
              </li>
              <li>
                <a href="#">What is needed for this?</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl text-amber-950 md:mb-8 mb-2">Contacts</h4>
            <ul className="space-y-5">
              <li>1234-456-789</li>
              <li>78962</li>
              <li>NewYork Square</li>
              <li>Bambi Company</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-yellow-300" />

      {/* copy right section */}
      <div
        className="mt-3 flex flex-col sm:flex-row gap-8 sm:items-center
       my-5 justify-between"
      >
        <p className="">2024 All rights reserved.</p>
        <div className="flex space-x-3 items-center text-xl cursor-pointer">
          <FaXTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
