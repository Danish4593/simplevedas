import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Users from "../pages/admin/Users";
import Header from "../pages/admin/HeaderPage";
import WelcomePage from "../pages/admin/WelcomePage";
import Course from "../pages/admin/course";

export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="course" element={<Course />} />
      <Route path="header" element={<Header />} />
      <Route path="welcome-page" element={<WelcomePage />}/>
    </Route>
  );
}
