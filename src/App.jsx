// src/App.jsx

import { BrowserRouter } from "react-router-dom";

// Make sure to import your new FaceCanvas
import FaceCanvas from "./components/canvas/FaceModel";

// You can comment out unused imports for now
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* We are only rendering the FaceCanvas. Everything else is commented out. */}
        <FaceCanvas />

        {/*
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        */}
      </div>
    </BrowserRouter>
  );
};

export default App;