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
    <section id="about" className="py-20 bg-gradient-to-br from-bg-card/50 to-accent-purple/5">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center" style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <div className="relative">
              <img
                ref={imageRef}
                src="/professional-developer.jpg"
                alt="Raja Kumar"
                className="w-72 h-72 rounded-2xl border-2 border-primary"
                style={{
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)",
                  transition: "transform 0.1s ease-out",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ animation: "fadeInUp 1s ease-out" }}>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at KIIT University, dedicated to building
              innovative web solutions and exploring cutting-edge technologies. With a strong foundation in full-stack
              development, I love turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              My journey in tech started with curiosity about how things work, and it has evolved into a passion for
              creating seamless user experiences and robust backend systems. I'm constantly learning and experimenting
              with new frameworks and tools.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-effect p-4 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-primary font-bold mb-2">Education</h3>
                <p className="text-text-secondary text-sm">B.Tech CSE, KIIT University</p>
              </div>
              <div className="glass-effect p-4 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-primary font-bold mb-2">Focus</h3>
                <p className="text-text-secondary text-sm">Full-Stack Development</p>
              </div>
              <div className="glass-effect p-4 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-primary font-bold mb-2">Passion</h3>
                <p className="text-text-secondary text-sm">User-Centric Solutions</p>
              </div>
            </div>

            <a href="#" className="btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
