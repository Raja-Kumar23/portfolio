"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-1000 transition-all duration-300 ${
        isScrolled ? "bg-bg-dark/85 backdrop-blur-md border-b border-primary/15" : "bg-transparent"
      }`}
      style={{ animation: "slideDown 0.6s ease-out" }}
    >
      <div className="container flex justify-between items-center py-4">
        <div
          className="text-2xl font-black bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent"
          style={{ animation: "glow 3s ease-in-out infinite" }}
        >
          RK
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="nav-link">
              Achievements
            </a>
          </li>
          <li className="w-px h-6 bg-primary/20"></li>
          <li>
            <a href="#contact" className="btn-primary text-sm">
              Get In Touch
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <span className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-dark/95 backdrop-blur-md border-b border-primary/15 p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" className="nav-link block" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link block" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link block" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link block" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#achievements" className="nav-link block" onClick={() => setIsOpen(false)}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="btn-primary block text-center" onClick={() => setIsOpen(false)}>
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: #b0b9c6;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, #a855f7);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #00d4ff;
        }

        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  )
}
