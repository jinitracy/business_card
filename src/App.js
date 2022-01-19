import React from "react";
import Header from "./Header"
import About from "./About"
import Footer from "./Footer"

export default function App(){
  return(
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  )
}