import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />      {/* After About */}
        <Experience />     {/* Work Experience */}
        <Tech />
        <Works />          {/* Projects */}
        <Certifications /> {/* After Projects */}
        <Blogs />          {/* After Certifications */}
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