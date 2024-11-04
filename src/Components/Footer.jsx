import { Link } from "react-scroll";
import {FaWhatsapp , FaInstagram , FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import {motion} from "framer-motion";

const Footer = () => {
   const footerVariant = {
      hidden:{  
        y:50 ,
         opacity:0,
      },
      visible:{
        y:0,
        opacity:1
      }

   }
  return (
    <div className="bg-light pt-24 pb-10">
      <div className="container flex flex-col lg:flex-row  gap-10">
        <motion.div 
            variants={footerVariant}
            initial="hidden"
            whileInView="visible"
          className="w-full lg:w-2/6 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold !leading-sung cursor-pointer"><Link to="home">SOCORIN</Link></h1>
          <p className="text-gray-400">
            SOCORIN is a platform dedicated to empowering aspiring developers. From
            beginner tutorials to advanced programming concepts, we provide a
            comprehensive learning experience designed to help you master coding
            skills, build projects, and launch your tech career.
          </p>
        </motion.div>
        {/* Courses */}
        <motion.div
           variants={footerVariant}
           initial="hidden"
            whileInView="visible"
          className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold !leading-sung">Courses</h1>
          <div className="flex flex-col gap-4">
            <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Web Development
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Software Development
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Apps Development
            </Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                E-learning
            </Link>
          </div>
          
        </motion.div>
        {/* links */}
        <motion.div
           variants={footerVariant}
           initial="hidden"
            whileInView="visible"
         className="flex flex-col gap-4">
           <h1 className="text-2xl font-semibold !leading-sung">Links</h1>
           <div className="flex flex-col gap-4">
              <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary  text-lg">
                  Home
              </Link>
              <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Services
              </Link>
              <Link to="education" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Education
              </Link>
              <Link to="subscribe" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Subscribe
              </Link>
              <Link to="subscribe" spy={true} smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-secondary text-lg">
                Join Community
              </Link>
           </div>
           
        </motion.div>
        {/* Get In Touch */}
        <motion.div
           variants={footerVariant}
           initial="hidden"
           whileInView="visible"
         className="flex flex-col gap-4">
           <h1 className="text-2xl font-semibold !leading-sung">Get In Touch</h1>
           <div className="flex flex-row">
             <motion.input
               whileFocus={{  borderWidth:3 , borderColor:"#f7ba34" }}
              type="text" placeholder="Enter your email" className="h-[60px] pl-3 rounded-l-xl  outline-none w-[250px] " />
             <button className="bg-primary text-white rounded-r-xl h-[60px] px-5">Go</button>
           </div>
           <div className="flex flex-row gap-8">
              <FaWhatsapp size={25} className="cursor-pointer rounded-full hover:text-primary transition-transform duration-300 ease-in-out"/>
              <FaInstagram size={25} className="cursor-pointer rounded-full hover:text-primary transition-transform duration-300 ease-in-out"/>
              <TbWorldWww size={25} className="cursor-pointer rounded-full hover:text-primary transition-transform duration-300 ease-in-out"/>
              <FaYoutube size={25} className="cursor-pointer rounded-full hover:text-primary transition-transform duration-300 ease-in-out"/>
           </div>
        </motion.div>
      </div>
      {/* copyright */}
      <motion.div 
      variants={footerVariant}
      initial="hidden"
      whileInView="visible"
       className="flex flex-row justify-center pt-8">
        <p>@copyright developed by <a href="https://sofyaneacoriy.netlify.app/" target="_blank" className="cursor-pointer text-secondary text-lg tracking-[1px] hover:underline hover:text-primary " >Sofyane Acoriy </a>| All rights reserved</p>
      </motion.div>
    </div>
  );
};

export default Footer;
