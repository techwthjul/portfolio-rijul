import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
// Remove StarsCanvas import - no more stars background
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /> {/* Keeps 3D computer */}
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <Blogs />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* REMOVED: <StarsCanvas /> - No more stars background in contact section */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;