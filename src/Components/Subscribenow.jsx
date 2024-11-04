import BgImg from "../assets/Img/bg.png";
import SubscribeContents from "../Layouts/SubscribeContents";

const Subscribenow = () => {
    const StyleImg = {
        backgroundImage:`url(${BgImg})`,
        backgrounRepeat: "no-repeat",
        backgroundSize :"cover",
        backgroundPosition:"center",
    }
  return (  
    <section className="bg-[#f7f7f7]  min-h-screen flex items-center justify-center">
        <div style={StyleImg} className="container py-24 md:py-28 mx-auto  flex flex-col justify-center">
            <div className="flex justify-center">
                <SubscribeContents className="z-10"/>
            </div>
            
        </div>

      
      {/* <div className="min-h-screen flex items-center ">
         <img src={Bg} alt="background" className="bg-cover" />
      </div> */}
    </section>
  )
}

export default Subscribenow
