
// import components
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Corusel from "./components/corusel/Corusel";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Footerbottom from "./components/footerBottom/Footerbottom";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Corusel/>
     <Services/>
     <Footer/>
     <Footerbottom/>
    </div>
  );
}

export default App;
