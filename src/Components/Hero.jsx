import HeroImg from "../assets/Img/hero.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blod from "../assets/Img/blob.svg";
import { motion} from "framer-motion";

export const AnimateUp = (delay) =>{
    return {
      hidden:{
       opacity:0,
       y:50,
      },
      visible:{
        opacity:1,
        y:0,
        transition:{
          type:"spring",
          stiffness:100,
          delay: delay,
          duration:0.5,
          ease:"easeInOut",
        }
      }
    }
  }
const Hero = () => {
  
  return (
    <section className="bg-light overflow-hidden pt-24 md:pt-16">
      <div className="min-h-screen container flex items-center ">
        <div className="flex flex-col lg:flex-row w-full gap-32 justify-center md:justify-start">
          <div className="w-full lg:max-w-[430px] flex flex-col justify-center space-y-10">
            <motion.h1
              variants={AnimateUp(0.6)}
              initial="hidden"
              whileInView="visible"
             className="text-5xl font-semibold !leading-snug">
              Let&apos;s Learn to build a
              <span className="text-secondary"> Website </span>for your business
            </motion.h1>
            <motion.div
               variants={AnimateUp(0.8)}
               initial="hidden"
               whileInView="visible"
             className="flex justify-center md:justify-start">
              <button 
               
              className="btn flex flex-row gap-2 group">
                Get Started
                <IoIosArrowRoundForward size={25} className="group-hover:translate-x-2 group-hover:-rotate-45 duration-300"/>
              </button>
            </motion.div>
            
          </div>
          <div
           
           className="flex items-center relative justify-center mx-auto">

            <motion.img
              initial={{ x:100 , opacity:0 }}
              whileInView={{ x:0 , opacity:1 }}
              transition={{ duration:0.6 , delay:0.4}}
             src={HeroImg} alt="ImgHero" className="w-[400px] xl:w-[600px] drop-shadow z-10"/>
            <motion.img
               initial={{ x:100 , opacity:0 }}
               whileInView={{ x:0 , opacity:1 }}
               transition={{ duration:0.6 , delay:0.2}}
             src={Blod} alt="" className="absolute -bottom-32 w-[800px] md:w-[1500px] z-1 hidden md:block"/>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
