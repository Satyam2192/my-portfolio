import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
import ContactUs from "./components/Contact";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;


// <div
//         className="relative z-0 bg-primary
//       h-100vh snap-y snap-mandatory scroll-smooth overflow-y-auto
//       scrollbar-hide
//       "
//       >
//         {/* <StarsCanvas /> */}
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Tech />
//         <Experience />
//         <Works />
//         {/* <Route path="/contact" element={<Contact />} /> */}
//         {/* <Feedbacks /> */}

//         <div className="relative z-0">
//           <Message />
//           <Footer />
//         </div>

//       </div>
