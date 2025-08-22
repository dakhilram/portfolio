// App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
// REMOVE: import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import "./styles/global.css";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience"; // ADD

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section> {/* ADD */}
        <section id="certificates"><Certificates /></section>
        {/* REMOVE: <section id="projects"><Projects /></section> */}
        <section id="research"><Research /></section>
        <section id="timeline"><Timeline /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
