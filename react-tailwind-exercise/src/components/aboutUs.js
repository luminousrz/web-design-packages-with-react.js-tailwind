import aboutUsPic from "../assets/full-stack.png"
import aboutUsPic2 from "../assets/woman.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function AboutUs(){
    return (
      <div id="about">
        <div className="flex md:px-14 my-15 font-sniglet justify-around md:flex-row flex-col items-center px-8 ">
          {/* image of about */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="scale-x-reverse">
              <img className="w-[350px]" src={aboutUsPic} />
            </div>
          </motion.div>

          {/* text of about */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-[35%] md:w-[53%] mt-11 space-y-[20px] "
          >
            <h5 className="text-2xl text-darkBrown font-extrabold w-[88%]">
              we try to improving our packages
              <span className="text-orange"> for many years.</span>
            </h5>
            <p className="md:w-[80%] w-[83%] text-[18px]">
              as you know the world of programming is full of new things , so
              you have to update yourself and we try hard about it to support
              you even after finishing this course.
            </p>
            <button className="bannerBtn">Have Question?</button>
          </motion.div>
        </div>

        <div className="flex md:px-14 my-15 font-sniglet justify-around md:flex-row-reverse flex-col items-center px-8">
          {/* image of about */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="scale-x-reverse">
              <img className="w-[350px]" src={aboutUsPic2} />
            </div>
          </motion.div>

          {/* text of about */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-[35%] md:w-[53%] mt-11 space-y-[20px] "
          >
            <h5 className="text-2xl text-darkBrown font-extrabold w-[88%]">
              we communciate with
              <span className="text-orange"> each others.</span>
            </h5>
            <p className="md:w-[80%] w-[83%] text-[18px]">
              we try to communciate with our student cause communciating in this
              industry is the most important things that we have to pay
              attention about it!
            </p>
            <button className="bannerBtn">Have Question?</button>
          </motion.div>
        </div>
      </div>
    );
}

export default AboutUs;