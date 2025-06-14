import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
// Remove or comment out StarsCanvas import:
// import { StarsCanvas } from "./components";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /> {/* Keep this - has your 3D computer */}
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
          {/* Remove this line: <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;