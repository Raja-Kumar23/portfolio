"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const imageRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return
      const rect = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.05)`
    }

    const handleMouseLeave = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)"
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(168, 85, 247, 0.05) 100%)",
        padding: "6rem 0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2
          style={{ textAlign: "center", marginBottom: "4rem", fontSize: "3.5rem", fontWeight: "900" }}
          className="gradient-text"
        >
          About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", animation: "fadeInUp 0.8s ease-out" }}>
            <div style={{ position: "relative" }}>
              <img
                ref={imageRef}
                src="/raj.png"
                alt="Raja Kumar"
                style={{
                  width: "clamp(14rem, 80vw, 18rem)",
                  height: "clamp(14rem, 80vw, 18rem)",
                  borderRadius: "1.5rem",
                  border: "2px solid var(--primary)",
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)",
                  transition: "transform 0.1s ease-out",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div style={{ animation: "fadeInUp 1s ease-out" }}>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.125rem",
                marginBottom: "1.5rem",
                lineHeight: "1.625",
              }}
            >
              I'm a passionate Computer Science and Engineering student at KIIT University, dedicated to building
              innovative web solutions with modern technologies. With a strong foundation in full-stack development, I
              love turning complex ideas into elegant, efficient applications.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.125rem",
                marginBottom: "2rem",
                lineHeight: "1.625",
              }}
            >
              My journey started with curiosity about how technology works, evolving into a passion for creating
              seamless user experiences combined with robust backend systems. I'm constantly exploring emerging
              frameworks and best practices in web development.
            </p>

            <a href="#" className="btn-primary" style={{ display: "inline-block" }}>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
