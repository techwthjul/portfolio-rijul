import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// Lazy load these components
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Blogs = lazy(() => import("./components/Blogs"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Education />
        </Suspense>
        <Experience />
        <Tech />
        <Works />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Certifications />
          <Blogs />
        </Suspense>
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