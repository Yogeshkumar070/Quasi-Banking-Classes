import Hero from "../components/home/Hero";
import Faculty from "../components/home/Faculty";
import PopularCourses from "../components/home/PopularCourses";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";
import SupportBanner from "../components/shared/SupportBanner";
import MockTestsPage from "./mock-tests/page";
import InterviewGDPage from "./interview-gd/page";
import FloatingActions from "../components/shared/FloatingActions"; // <-- IMPORT HERE

export default function Home() {
  return (
    <>
      <FloatingActions /> {/* <-- RENDER HERE */}
      
      <Hero />
      <Faculty />
      <PopularCourses />
      
      <div id="mock-tests">
        <MockTestsPage />
      </div>

      <div id="interview-gd">
        <InterviewGDPage />
      </div>

      <Testimonials />
      
      <SupportBanner />
      <Footer />
    </>
  );
}