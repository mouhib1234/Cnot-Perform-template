import Navbar from "./Sections/Navbar";
import HeroSection from "./Sections/HeroSection";
import FeatureSection from "./Sections/FeatureSection";
import Workflow from "./Sections/Workflow";
import Footer from "./Sections/Footer";
import Pricing from "./Sections/Pricing";
import Testimonials from "./Sections/Testimonials";
import EventSection from "./Sections/EventSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="lg:mx-32 md:mx-16 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <EventSection />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
