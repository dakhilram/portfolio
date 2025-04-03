
import "./../styles/navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
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
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };
  
  return (
    <nav className="navbar">
      <div className="nav-logo">My Portfolio</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("research")}>Research</li>
        <li onClick={() => scrollToSection("timeline")}>Timeline</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
  {theme === "light" ? "🌙" : "☀️"}
</button>

    </nav>
  );
};

export default Navbar;
