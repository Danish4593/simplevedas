import Carousel from "../pages/Carousel";
import WelcomeSection from "../pages/WelcomeSection";
import SimpleVedasSection from "../pages/SimpleVedasSection";
import ScientificSpirituality from "../pages/ScientificSpirituality";
import Testimonials from "../pages/Testimonials";
import Courses from "../pages/Courses";
import WisdomQuotes from "../pages/WisdomQuotes";

export default function Home() {
  return (
    <>
    <Carousel/>
    <WelcomeSection/>
    <Courses/>
    <SimpleVedasSection/>
    <ScientificSpirituality/>
    <Testimonials/>
    <WisdomQuotes/>
    </>
  )
}
