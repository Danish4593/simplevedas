import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CoursesPage from "./pages/CoursesPage";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* User pages wrapped in MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />  ✅ No leading slash */}
          {/* Here it will check all about pages */}
          <Route path="about/:slug" element={<About />} />
          <Route path="course" element={<CoursesPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin pages wrapped in AdminLayout */}
        <Route path="admin" element={<AdminLayout />}>
          <Route path="header" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;