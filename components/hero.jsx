"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [typingText, setTypingText] = useState("")
  const [showIndicator, setShowIndicator] = useState(true)
  const cardRef = useRef(null)

  const phrases = ["Web Developer", "UI Designer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentPhrase = phrases[phraseIndex]

      if (isDeleting) {
        setTypingText(currentPhrase.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypingText(currentPhrase.substring(0, charIndex + 1))
        charIndex++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        typeSpeed = 500
      }

      setTimeout(typeEffect, typeSpeed)
    }

    typeEffect()
  }, [])

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024) {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const cardCenterY = rect.top + rect.height / 2

        const angleX = (e.clientY - cardCenterY) / 30
        const angleY = (cardCenterX - e.clientX) / 30

        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowIndicator(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome to my portfolio</p>
        <h1 className="hero-title">
          I&apos;m <span className="gradient-text">Raja Kumar</span>
          <br />
          <span className="typing-wrapper">
            <span className="typing-text">{typingText}</span>
          </span>
        </h1>
        <p className="hero-description">
          A passionate web developer crafting modern, responsive user interfaces. Building innovative solutions like
          KIITHub and creating seamless digital experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-card" ref={cardRef}>
          <div className="card-content">
            <div className="card-header">
              <div className="card-dot"></div>
              <div className="card-dot"></div>
              <div className="card-dot"></div>
            </div>
            <div className="card-code">
              <span className="comment">// Raja Kumar</span>
              <br />
              <br />
              <span className="keyword">const</span> <span className="function">dev</span> = {"{"}
              <br />
              &nbsp;&nbsp;name: <span className="string">&quot;Raja&quot;</span>
              ,
              <br />
              &nbsp;&nbsp;skills: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="string">&quot;JS&quot;</span>, <span className="string">&quot;Next.js&quot;</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;loves: <span className="string">&quot;Chicken Biryani&quot;</span>
              <br />
              {"}"};
              <br />
              <br />
              <span className="function">build</span>();
            </div>
          </div>
        </div>
      </div>

      {/* <div className="scroll-indicator" style={{ opacity: showIndicator ? 1 : 0 }}>
        <span>Scroll</span>
        <div className="mouse"></div>
        <div className="scroll-arrows">
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div> */}
    </section>
  )
}
