import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import JoinComiunity from "./Components/JoinComiunity";
import Navebar from "./Components/Navebar";
import Services from "./Components/Services";
import Subscribenow from "./Components/Subscribenow";

function App() {

  return (
    <div className="font-poppnis">
      <Navebar/>
       <main>
          <div id="home">
            <Hero/>
          </div>
          <div id="services">
            <Services/>
          </div>
          <div id="education">
             <Education/>
          </div>
          <div id="subscribe">
             <Subscribenow/>
          </div>
          <div id="community">
            <JoinComiunity/>
          </div>
       </main>
       <Footer/>
       
    </div>
  )
}

export default App
