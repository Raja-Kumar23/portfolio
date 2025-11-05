"use client"

import { useState, useEffect } from "react"
import styles from "./navbar.module.css"

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
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container flex-between">
        <div className={styles.logo}>RK</div>

        {/* Desktop Menu */}
        <ul className={`${styles.menu} hidden-mobile`}>
          <li>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
          </li>
          <li style={{ width: "1px", height: "24px", background: "rgba(0, 212, 255, 0.2)" }}></li>
          <li>
            <a href="#contact" className="btn-primary" style={{ fontSize: "0.875rem" }}>
              Get In Touch
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className={`${styles.hamburger} hidden-desktop`} onClick={() => setIsOpen(!isOpen)}>
          <span className={`${styles.line} ${isOpen ? styles.line1 : ""}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line2 : ""}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line3 : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            <li>
              <a href="#home" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navLink} onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn-primary"
                style={{ display: "block", textAlign: "center" }}
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
