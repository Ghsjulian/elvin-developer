import Header from "./Header";
import Footer from "./Footer";
import React from 'react'
import { Outlet } from "react-router-dom";
import "../assets/css/index.css"
import "../assets/css/page.css"

const Layouts = () => {
  return (
    <>
    <Header/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layouts