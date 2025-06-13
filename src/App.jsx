import { BrowserRouter } from "react-router-dom";
// Note: StarsCanvas is no longer imported as it's not used
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        
        {/* Your Tech skill balls are now enabled */}
        <Tech />

        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* The StarsCanvas (Earth model) is removed to free up resources */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;