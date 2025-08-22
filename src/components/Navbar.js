// components/Navbar.js
import "./../styles/navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  };

  return (
    <nav className="navbar">
      {/* make the logo scroll to About */}
      <div className="nav-logo" onClick={() => scrollToSection("about")}>DGAR</div>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li> {/* CHANGED */}
        <li onClick={() => scrollToSection("certificates")}>Certificates</li>
        <li onClick={() => scrollToSection("research")}>Research</li>
        <li onClick={() => scrollToSection("timeline")}>Timeline</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
      {/* Optional theme toggle
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "light" ? "🌞" : "🌙"}
      </button> */}
    </nav>
  );
};

export default Navbar;
