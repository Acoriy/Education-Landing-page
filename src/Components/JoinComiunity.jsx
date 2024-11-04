import bannerImg from "../assets/Img/banner.png";
import {motion} from "framer-motion";

const JoinComiunity = () => {
  return (
    <div className="bg-white">
      <div className="container min-h-screen grid grid-cols-1 md:grid-cols-2 space-x-2">

        <motion.div 
         initial={{ x:-50 , opacity:0 }}
         whileInView={{ x:0 , opacity:1 }}
         transition={{ duration:0.4 }}
        className="flex flex-col my-auto gap-5 lg:max-w-[430px] items-center lg:items-start text-center lg:text-start">
          <h1 className="text-4xl font-semibold !leading-snug">Join Our Community to Start your Journey</h1>
          <p className="opacity-[0.4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </p>
          <button className="btn">Join Now</button>
        </motion.div>

        <motion.div
          initial={{ x:50 , opacity:0 }}
          whileInView={{ x:0 , opacity:1 }}
          transition={{ duration:0.4 }}
         className="flex items-center  justify-center">
            <img src={bannerImg} alt="BannerImg" className="drop-shadow  w-2/3 " />
        </motion.div>
      </div>
    </div>
  );
};

export default JoinComiunity;
