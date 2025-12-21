import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CoursesPage from "../pages/CoursesPage";
import Quotes from "../pages/quotes";

export default function UserRoutes() {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      {/* no need to about pages */}
      {/* <Route path="about" element={<About />} /> */}
      <Route path="about/:slug" element={<About />} /> 
      <Route path="course" element={<CoursesPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="quotes" element={<Quotes />} />
    </Route>
  );
}
