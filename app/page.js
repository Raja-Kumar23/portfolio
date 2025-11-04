"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Education from "@/components/education"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-bg-darker to-bg-dark">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin"></div>
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-t-primary animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-gradient-to-br from-bg-darker via-bg-dark to-bg-darker">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
