import EducaationImg from "../assets/Img/education.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import {motion} from "framer-motion";


const Education = () => {
    const EducationData = [
        {
            id:1,
            icon:<FaBookReader size={25}/>,
            title:"10,000+ Courses",
            delay:0.3
        },
        {
            id:2,
            icon:<GrUserExpert size={25}/>,
            title:"Expert Instruction",
            delay:0.5
        },
        {
            id:3,
            icon:<MdOutlineAccessTime size={25}/>,
            title:"Lifetime Access",
            delay:0.7
        },
    ];

    const UpAnimatioVariant = (delay)=>{
        return{
            hidden:{
                y:100,
                opacity:0,
            },
            visible:{
                y:0,
                opacity:1,
                transition:{
                    duration:1.3,
                    delay:delay,
                    type:"spring",
                    stiffness:100,
                }
            }
        }
    }
    
  return (
    <div className="bg-white text-black">
       <div className="container min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 items-center  ">
           <motion.div 
             initial={{ x:-100 , opacity:0 }}
             whileInView={{ x:0 , opacity:1 }}
             transition={{ 
                duration:0.5
              }}
           className="w-[350px] items-center justify-center mx-auto drop-shadow">
              <img src={EducaationImg} alt="EducaationImg" />
           </motion.div>
           <div>
             <motion.h1
               initial={{ opacity:0 ,scale:0 }}
               whileInView={{ opacity:1 , scale:1}}
               transition={{ 
                  duration:1,
                  ease:"easeInOut"
                }} 
             className="text-4xl !leading-snug font-semibold">The World&apos;s Leading Online learning Platform</motion.h1>
             {/*  */}
             <div className="flex flex-col gap-8 pt-10">
                {
                    EducationData.map((item)=>{
                        return <motion.div
                           variants={UpAnimatioVariant(item.delay)}
                           initial="hidden"
                           whileInView="visible"
                          key={item.id} className="bg-light w-full flex flex-row items-center px-5 py-6 gap-6 rounded-xl hover:bg-white hover:shadow-2xl">
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </motion.div>
                    }
                    )
                }
             </div>
           </div>
       </div>
    </div>
  )
}

export default Education
