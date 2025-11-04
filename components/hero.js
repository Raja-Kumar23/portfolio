"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Hero() {
  const containerRef = useRef(null)
  const [typedText, setTypedText] = useState("")
  const skills = ["HTML & CSS", "JavaScript", "React", "Firebase", "Node.js", "Web Design"]
  const [skillIndex, setSkillIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // 3D Scene Setup
  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight * 0.6)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 100
    const posArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 2000
      posArray[i + 1] = (Math.random() - 0.5) * 2000
      posArray[i + 2] = (Math.random() - 0.5) * 2000
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 7,
      color: 0x00d4ff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 100

    // Animation loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0002
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.6)
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight * 0.6)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  // Typing effect
  useEffect(() => {
    const currentSkill = skills[skillIndex]
    let timeout

    if (!isDeleting && charIndex < currentSkill.length) {
      timeout = setTimeout(() => {
        setTypedText(currentSkill.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentSkill.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } else if (!isDeleting && charIndex === currentSkill.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setSkillIndex((skillIndex + 1) % skills.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, skillIndex, skills])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={containerRef} className="absolute inset-0 z-0"></div>

      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
        style={{ animation: "bgShift 15s ease-in-out infinite" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" style={{ animation: "fadeInUp 1s ease-out" }}>
        <h1
          className="text-6xl md:text-7xl font-black mb-4 gradient-text"
          style={{ animation: "glow 3s ease-in-out infinite" }}
        >
          Raja Kumar
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary mb-8" style={{ animation: "fadeInUp 1.2s ease-out" }}>
          CSE Student | Web Developer | Tech Enthusiast
        </p>

        <div
          className="text-lg md:text-xl text-text-secondary mb-12 min-h-8"
          style={{ animation: "fadeInUp 1.4s ease-out" }}
        >
          <span>Specializing in </span>
          <span className="text-primary font-bold">{typedText}</span>
          <span className="text-primary animate-pulse">|</span>
        </div>

        <div className="flex gap-4 justify-center flex-wrap" style={{ animation: "fadeInUp 1.6s ease-out" }}>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn-secondary">
            View My Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ animation: "bounce 2s infinite" }}
        >
          <div className="w-2 h-2 bg-primary rounded-full mx-auto" style={{ boxShadow: "0 0 20px #00d4ff" }}></div>
        </div>
      </div>
    </section>
  )
}
