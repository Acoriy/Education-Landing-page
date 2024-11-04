import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import ServiceCard from "../Layouts/ServiceCard";

const Services = () => {
  const ServicesData = [
    {
      id: 1,
      title: "Web Development",
      link: "#",
      icon: <TbWorldWww size={35} />,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Mobile development",
      link: "#",
      icon: <CiMobile3 size={35} />,
      delay: 0.3,
    },
    {
      id: 3,
      title: "Software development",
      link: "#",
      icon: <RiComputerLine size={35} />,
      delay: 0.4,
    },
    {
      id: 4,
      title: "Satisfied clients",
      link: "#",
      icon: <IoMdHappy size={35} />,
      delay: 0.5,
    },
    {
      id: 5,
      title: "SEO optimization",
      link: "#",
      icon: <IoPulseOutline size={35} />,
      delay: 0.6,
    },
    {
      id: 6,
      title: "24/7 support",
      link: "#",
      icon: <BiSupport size={35} />,
      delay: 0.7,
    },
  ];

 
  return (
    <div className="bg-white text-black">
      <div className="container min-h-screen flex items-center">
        {/* Services : */}
        <div className="flex flex-col space-y-24">
          <h1 className="text-4xl font-semibold text-start">Services we provide</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-8">
            {ServicesData.map((item) => (
              <ServiceCard key={item.id} title={item.title} icon={item.icon} delay={item.delay} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
