import Navbar from "./Sections/Navbar";
import HeroSection from "./Sections/HeroSection";
import FeatureSection from "./Sections/FeatureSection";
import Fonctionalities from "./Sections/Fonctionalities ";
import Footer from "./Sections/Footer";
import EventSection from "./Sections/EventSection";
import AboutUs from "./Sections/AboutUs";
import Partners from "./Sections/Partners";
import OlympicGameTimer from "./Sections/OlympicGameTimer";
import ContactUs from "./Sections/ContactUs";
import OlympiChampions from "./Sections/OlympiChampions";
import Metrics from "./Sections/Metrics";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <HeroSection />

        <Partners />
        <Metrics />

        <OlympicGameTimer />
        <AboutUs />
        <FeatureSection />
        <Fonctionalities />
        <OlympiChampions />
        <EventSection />

        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
