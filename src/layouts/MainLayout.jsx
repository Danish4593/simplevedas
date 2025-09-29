import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsLetter from "../pages/NewsLetter"

export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: 0 }}>
        <Outlet />
      </main>
      <NewsLetter/>
      <Footer/>
    </>
  );
}
