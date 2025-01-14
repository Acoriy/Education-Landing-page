import { Link } from "react-scroll";
import {motion} from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const Navebar = () => {
  const [menu , setMenu] = useState(false);

  const handleMenu = ()=>{
    setMenu(!menu);
  }

  const closeMenu = ()=>{
    setMenu(false)
  }

  const headerRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background = "rgba(247, 247, 247, 0.8)"
        headerRef.current.style.padding = "8px 18px";
        headerRef.current.style.boxShadow = "0px 3px 10px rgb(0,0,0,0.24)";
        headerRef.current.style.borderRadius = "30px";

     }else{
      headerRef.current.style.background = "transparet";
       headerRef.current.style.padding = "30px 0";
       headerRef.current.style.boxShadow = "none";
     }
    })
  } , []) 

  return (
    <div  className="fixed w-full z-50">
      <div>
        <motion.div ref={headerRef}
          initial={{ y:-50 , opacity:0 }}
          animate={{ y:0 , opacity:1 }}
          transition={{ 
            duration:0.3 ,
            stiffness:200,
            damping:5,
           }}
         className="container flex flex-row items-center justify-between pt-[30px]">
          {/* Logo section */}
          <div className="flex items-center cursor-pointer ml-3 md:ml-0">
            <h1 className="text-2xl font-semibold"><Link to="home" spy={true} smooth={true} duration={500}>SOCORIN</Link></h1>
          </div>
          {/* Navebar Section */}
          <nav className="flex flex-row gap-8 leading-tight items-center mx-3 lg:mx-0">
           
              <Link to="home" spy={true} smooth={true} duration={500} className="nav-link group hidden lg:block">
                 Home
                 <span className="hover-spane-link"></span>
              </Link>
            
            <Link to="services" spy={true} smooth={true} duration={500} className="nav-link group hidden md:block">
              Services
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="education" spy={true} smooth={true} duration={500} className="nav-link group hidden md:block">
              Education
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="subscribe" spy={true} smooth={true} duration={500} className="nav-link group hidden md:block">
              Subscribe
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="community" spy={true} smooth={true} duration={500} className="nav-link group hidden md:block">
              Join Community
              <span className="hover-spane-link"></span>
            </Link>
            <button className="btn hidden md:block">
              <Link to="community" spy={true} smooth={true} duration={500}>Sign In</Link>
            </button>
                {/* Navebar Icons  */}
            <div className="md:hidden text-black ">
              {
                menu ? (<AiOutlineClose size={35} onClick={handleMenu}/>) 
                : (<HiOutlineMenu size={35} onClick={handleMenu}/>)
              }
            </div>
          </nav>
        
        </motion.div>
      </div>
      {/* mobile navebare */}
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} bg-light absolute lg:hidden z-10 w-full flex flex-col items-center pt-16 gap-10 pb-5 transition-transform duration-300 ease-in-out`}>
          <Link to="home" spy={true} smooth={true} duration={500} className="nav-link group" onClick={closeMenu}>
              Home
               <span className="hover-spane-link"></span>
           </Link>
            
            <Link to="services" spy={true} smooth={true} duration={500} className="nav-link group" onClick={closeMenu}>
              Services
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="education" spy={true} smooth={true} duration={500} className="nav-link group" onClick={closeMenu}>
              Education
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="subscribe" spy={true} smooth={true} duration={500} className="nav-link group" onClick={closeMenu}>
              Subscribe
              <span className="hover-spane-link"></span>
            </Link>
            <Link to="community" spy={true} smooth={true} duration={500} className="nav-link group" onClick={closeMenu}>
              Contact Us
              <span className="hover-spane-link"></span>
            </Link>
            <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navebar;
