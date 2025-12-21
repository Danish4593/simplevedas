import React from "react";
import { Outlet } from "react-router-dom";
import FirstNavbar from "../components/FirstNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <FirstNavbar />
      <Navbar />
      <main style={{ padding: 0 }}>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
