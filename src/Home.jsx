import { BrowserRouter } from "react-router-dom";

import {
  About,
  Message,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <BrowserRouter>
      <div
        className="relative z-0 bg-primary
      h-100vh snap-y snap-mandatory scroll-smooth overflow-y-auto
      scrollbar-hide 
      "
      >
        {/* <StarsCanvas /> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        {/* <Route path="/contact" element={<Contact />} /> */}
        
        
        <div className="relative z-0">
          <Message />
          <Footer />
        </div> 

      </div>
    // </BrowserRouter>
  );
};

export default App;
