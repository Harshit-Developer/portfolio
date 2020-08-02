import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import MyNavbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Experience from "./Components/experience/Experience";
import Project from "./Components/projects/Project";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/footer";
import Home from "./Components/carousel/Carousel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
