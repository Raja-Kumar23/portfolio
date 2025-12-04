"use client"

import { useEffect, useState } from "react"

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Raja</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Contact
          </a>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span>{theme === "dark" ? "🌙" : "☀️"}</span>
          </button>
        </li>
      </ul>
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
