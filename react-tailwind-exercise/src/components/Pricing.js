import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Pricing(){
  
const [isYearly, setIsYearly] = useState(false);


const pricingData = [
  {
    package: "start",
    monthlyPrice: "50$",
    yearlyPrice: "450$",
    description:
      "in this course we're going to learn basic topic of web design like HTML5 , CSS3 and BootStrap to make the structure and design of our page.",
  },
  {
    package: "Advance",
    monthlyPrice: "80$",
    yearlyPrice: "850$",
    description:
      "in this course we're going to learn basic topic of web design and learning about the logic of a web page to make it better.",
  },
  {
    package: "Premium",
    monthlyPrice: "98$",
    yearlyPrice: "965$",
    description:
      "this course is premium one , we're going to learn one of the most popular framework of JS `React` and basic topic and logic of a web page.",
  },
];

    return (
      <div
        className="my-20 md:px-14 px-8 mx-auto font-sniglet text-center"
        id="pricing"
      >
        {/*text of pricing srction */}
        <div className="flex flex-col items-center space-y-5">
          <h3 className="text-[28px] text-brown font-semibold">
            You can see all of our plans.
          </h3>
          <p className="md:w-[35%] w-[83%] text-green text-[18px]">
            we prepared these package with the best price and if you have any other question you can contact us :)))
          </p>
        </div>
        {/* Pricing toggle */}
        <div className="mt-8 text-center">
          <label
            htmlFor="toggle"
            className="inline-flex items-center justify-center space-x-5"
          >
            <span className="text-[19px] tracking-wider">Monthly</span>
            <div className="w-[45px] h-[20px] rounded-3xl bg-lime-200 transition duration-200 ease-in-out">
              <div
                className={`w-[19px] h-[19px] rounded-3xl  transition duration-200 ease-in-out ${
                  isYearly ? "bg-lime-900 ml-8" : "bg-lime-500"
                }`}
              ></div>
            </div>
            <span className="text-[19px] tracking-wider">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
        {/* Pricing cards */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-3 sm:grid-cols-2 mt-10 gap-10 mx-auto"
        >
          {pricingData.map((data, index) => {
            return (
              <div
                key={index}
                className="space-y-6 border shadow-3xl rounded-3xl px-8 py-8"
              >
                <h3 className="text-[18px] text-green hover:text-greenHover cursor-pointer font-extrabold">
                  {data.package}
                </h3>
                <p>{data.description}</p>
                <p className="text-[20px]">
                  {isYearly ? data.yearlyPrice : data.monthlyPrice}
                  <span className="text-lime-700 text-[18px]">
                    {isYearly ? " year" : " month"}
                  </span>
                </p>
                <ul className="text-left space-y-1">
                  <li>
                    <span className="inline-grid h-3 w-3 rounded-full mr-2 bg-lime-600"></span>
                    learning HTML5 elements completely
                  </li>
                  <li>
                    <span className="inline-grid h-3 w-3 rounded-full mr-2 bg-lime-600"></span>
                    CSS3 for designing and create prettier website
                  </li>
                  <li>
                    <span className="inline-grid h-3 w-3 rounded-full mr-2 bg-lime-600"></span>
                    BootStrap , FrameWork of FrontEnd
                  </li>
                  <li>
                    <span className="inline-grid h-3 w-3 rounded-full mr-2 bg-lime-600"></span>
                    JavaScript for making the logic of website
                  </li>
                  <li>
                    <span className="inline-grid h-3 w-3 rounded-full mr-2 bg-lime-600"></span>
                    FrameWork Of JavaScript
                  </li>
                </ul>
                <div className="mt-10">
                  <button className="bannerBtn cursor-pointer">
                    Let's have The Course!
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
}

 export default Pricing;