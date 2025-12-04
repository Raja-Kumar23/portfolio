"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("active")
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="section-header reveal">
        <p className="section-subtitle">Get to know me</p>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-image reveal-left">
          <div className="about-img-wrapper">
            <div className="about-img-inner">
              <img src="/mypp.png" alt="Raja Kumar working on laptop" />
            </div>
          </div>
          
        </div>
        <div className="about-content reveal-right">
          <h3>Building Modern Web Experiences</h3>
          <p>
            I&apos;m Raja Kumar, a dedicated web developer with a passion for creating intuitive and visually stunning
            user interfaces. My journey in web development has led me to work on exciting projects like KIITHub.in.
          </p>
          <p>
            I specialize in modern frontend technologies and enjoy tackling complex problems with clean, efficient code.
            Currently studying at KIIT University, Bhubaneswar.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h4>1+</h4>
              <p>Projects Live</p>
            </div>
            <div className="stat">
              <h4>7+</h4>
              <p>Technologies</p>
            </div>
            <div className="stat">
              <h4>∞</h4>
              <p>Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
