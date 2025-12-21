import Carousel from "../pages/Carousel";
import WelcomeSection from "../pages/WelcomeSection";
import SimpleVedasSection from "../pages/SimpleVedasSection";
import ScientificSpirituality from "../pages/ScientificSpirituality";
import Testimonials from "../pages/Testimonials";
import CoursesPage from "../pages/CoursesPage";
import WisdomQuotes from "../pages/WisdomQuotes";
import NewsLetter from "../pages/NewsLetter";

export default function Home() {
  return (
    <>
    <Carousel/>
    <WelcomeSection/>
    <CoursesPage/>
    <SimpleVedasSection/>
    <ScientificSpirituality/>
    <Testimonials/>
    <WisdomQuotes/>
    <NewsLetter/>
    </>
  )
}
