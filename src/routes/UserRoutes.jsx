import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {Home, About, Contact, AllCourse} from "../index";

export default function UserRoutes() {
  return (
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="courses" element={<AllCourse />} />
    </Route>
  );
}
