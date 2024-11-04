import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

const SubscribeContents = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col"
    >
      <div className="text-center max-w-[300px] lg:max-w-[430px] mx-auto space-y-4">
        <h1 className="text-2xl md:text-4xl font-semibold !leading-snug">
          450K+ Students are learning from us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          iusto minima
        </p>
        <button className="btn mt-3 flex flex-row  items-center mx-auto gap-4 group">
          Subscribe Now
          <FaBell size={15} className="group-hover:animate-bounce group-hover:text-lg duration-200"/>
        </button>
      </div>
    </motion.div>
  );
};

export default SubscribeContents;
