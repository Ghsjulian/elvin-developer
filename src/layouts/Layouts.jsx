import Header from "./Header";
import Footer from "./Footer";
import React,{useEffect} from 'react'
import { Outlet } from "react-router-dom";
import "../assets/css/index.css"
import "../assets/css/page.css"
import AOS from "aos";
import "aos/dist/aos.css"

const Layouts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init();
    AOS.refresh();
}, [])
  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts