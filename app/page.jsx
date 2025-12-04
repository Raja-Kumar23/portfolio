"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParallaxBackground from "@/components/parallax-background"
import ScrollProgress from "@/components/scroll-progress"
import Toast from "@/components/toast"

export default function Home() {
  const [theme, setTheme] = useState("dark")
  const [toastMessage, setToastMessage] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type })
    setTimeout(() => setToastMessage(null), 4000)
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <ParallaxBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact showToast={showToast} />
      <Footer />
      <Toast toastMessage={toastMessage} />
    </>
  )
}
