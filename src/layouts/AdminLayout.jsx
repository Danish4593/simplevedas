import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <header style={{ padding: "10px", backgroundColor: "#FFC13C" }}>
        <h1>Admin Panel</h1>
      </header>
      <main>
        <Outlet /> {/* Admin pages render here */}
      </main>
    </>
  );
}
