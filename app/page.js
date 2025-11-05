"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import PortfolioFeedback from "@/components/portfolio-feedback"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #050812 0%, #0a0e27 100%)",
        }}
      >
        <div style={{ position: "relative", width: "64px", height: "64px" }}>
          <div
            style={{
              position: "absolute",
              inset: "0",
              borderRadius: "50%",
              border: "4px solid rgba(0, 212, 255, 0.2)",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: "8px",
              borderRadius: "50%",
              border: "4px solid transparent",
              borderTopColor: "#00d4ff",
              animation: "spin 1s linear infinite reverse",
            }}
          ></div>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <main
      style={{
        background: "linear-gradient(135deg, #050812 0%, #0a0e27 50%, #0f1729 100%)",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <PortfolioFeedback />
      <Contact />
      <Footer />
    </main>
  )
}
