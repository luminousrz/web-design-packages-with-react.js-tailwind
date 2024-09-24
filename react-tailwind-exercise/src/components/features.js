import feature1 from "../assets/smartCat.png"
import feature2 from "../assets/kitty.png"
import feature3 from "../assets/cat01.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Features(){
    return (
      <div className="my-20 md:px-14 px-8 mx-auto" id="features">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* features Text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-1/4"
          >
            <h1 className="font-extrabold text-[30px] my-3">
              Do You Want More Information?
            </h1>
            <p className="text-[19px]">
              you can see our student and what they made and develop just by
              learning our package.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="lg:w-3/4 w-full"
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className="bg-[#f6f6f6] rounded-3xl h-50 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-2 transition-all duration-300 hover:bg-[#1b630036] cursor-pointer">
                <div className="sm:flex sm:flex-col flex items-center ">
                  <div className="sm:-mt-4 mb-4 w-[150px] ">
                    <img src={feature1} className="" />
                  </div>
                  <div>
                    <h5 className="px-5 text-center mt-5">
                      What They Made With the Bset SEO ranking on Google Engine!
                    </h5>
                  </div>
                </div>
              </div>
              <div className="bg-[#f6f6f6] rounded-3xl h-50 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-2 transition-all duration-300 hover:bg-[#1b630036] cursor-pointer md:mt-16">
                <div className="sm:flex sm:flex-col flex items-center ">
                  <div className="md:-mt-4 mb-4 w-[150px]">
                    <img src={feature2} className="" />
                  </div>
                  <h5 className="px-5 text-center mt-5">
                    What They Made With the Bset Minimal Design That
                    <span className="text-lime-600"> Make You Impress!</span>
                  </h5>
                </div>
              </div>
              <div className="bg-[#f6f6f6] rounded-3xl h-50 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-2 transition-all duration-300 hover:bg-[#1b630036] cursor-pointer">
                <div className="sm:flex sm:flex-col flex items-center ">
                  <div className="md:-mt-4 mb-4 w-[150px]">
                    <img src={feature3} className="" />
                  </div>
                  <h5 className="px-5 text-center mt-5">
                    Their Website gonna Explode The Google Engine And Make a
                    lots of Cutomer!
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
}

export default Features;