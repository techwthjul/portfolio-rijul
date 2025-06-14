import { BrowserRouter } from "react-router-dom";
// Note: StarsCanvas is removed from the import list
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";
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
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <Blogs />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          {/* StarsCanvas is removed from here */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;