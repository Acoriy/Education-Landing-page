import {motion} from "framer-motion";
// eslint-disable-next-line react/prop-types
const ServiceCard = ({title , icon , delay }) => {
  return (
    <motion.div 
      initial={{ x:100,opacity:0 }}
      whileInView={{ x:0, opacity:1 }}
      transition={{ 
          duration:0.3,
          delay:delay,
          ease :"easeInOut"
       }}
      className="flex flex-col items-center text-center px-3 py-5 bg-light gap-10 rounded-xl hover:scale-110 hover:bg-white hover:shadow-2xl cursor-pointer">
       <div >
         {icon}
       </div>
       <h1>{title}</h1>
    </motion.div>
  )
}

export default ServiceCard
