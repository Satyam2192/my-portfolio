import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    
    <BrowserRouter>

      <div className='relative z-0 bg-primary
      h-100vh snap-y snap-mandatory scroll-smooth overflow-y-auto
      scrollbar-hide 
      '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        
        <Tech />
        <Works />
        
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

