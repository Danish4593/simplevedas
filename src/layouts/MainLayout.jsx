import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet /> {/* User pages render here */}
      </main>
    </>
  );
}
