import { Outlet } from "react-router-dom";
import {Header, Navbar, Footer, NewsLetter} from "../index";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
        <Outlet />
      <NewsLetter/>
      <Footer/>
    </>
  );
}
