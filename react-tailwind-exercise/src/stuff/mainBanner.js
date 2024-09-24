import {motion} from "framer-motion"
import {fadeIn} from "../variants"


function MainBanner({heading , mainTextOfBanner , firstBtn , imageOfBanner}){
    return (
      <div className="gradient rounded-2xl ">
        <div className="flex md:flex-row flex-col-reverse justify-evenly items-center gap-10 sm:p-4">
          {/* content of the banner */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-3/5 grid gap-8 w-[80%]"
          >
            <h2 className="md:text-left text-left text-[30px] font-extrabold ">
              {heading}
            </h2>
            <p className="text-[19px] md:text-left text-left w-[85%]">
              {mainTextOfBanner}
            </p>
            <div className="gap-x-5 flex justify-start md:justify-start md:mb-0 mb-5">
              <button className="bannerBtn">{firstBtn}</button>

            </div>
          </motion.div>
          {/* image of the banner */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="scale-x-reverse w-[90%]">
              <img src={imageOfBanner} className="w-[315px]"></img>
            </div>
          </motion.div>
        </div>
      </div>
    );
}

export default MainBanner;