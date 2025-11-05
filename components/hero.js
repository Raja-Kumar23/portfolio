"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import styles from "./hero.module.css"

export default function Hero() {
  const containerRef = useRef(null)
  const [typedText, setTypedText] = useState("")
  const skills = ["Web Development", "3D Graphics", "Firebase Backend", "UI/UX Design", "React & Node.js"]
  const [skillIndex, setSkillIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.7), 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight * 0.7)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)

    // Particle system with independent rotation
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCnt = 200
    const posArray = new Float32Array(particlesCnt * 3)

    for (let i = 0; i < particlesCnt * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 2500
      posArray[i + 1] = (Math.random() - 0.5) * 2500
      posArray[i + 2] = (Math.random() - 0.5) * 2500
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 8,
      color: 0x00d4ff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Rotating torus - independent animation
    const torusGeometry = new THREE.TorusGeometry(120, 35, 16, 100)
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xa855f7,
      emissive: 0x6b21a8,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    scene.add(torus)

    // Secondary rotating cube for depth
    const cubeGeometry = new THREE.BoxGeometry(60, 60, 60)
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x00d4ff,
      emissive: 0x00a8cc,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube)

    // Lighting setup
    const light1 = new THREE.PointLight(0x00d4ff, 1.5, 600)
    light1.position.set(200, 200, 200)
    scene.add(light1)

    const light2 = new THREE.PointLight(0xa855f7, 1, 500)
    light2.position.set(-200, -200, 200)
    scene.add(light2)

    camera.position.z = 120

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      particles.rotation.x += 0.00008
      particles.rotation.y += 0.00015
      torus.rotation.x += 0.001
      torus.rotation.y += 0.002
      torus.rotation.z += 0.0008
      cube.rotation.x += 0.0015
      cube.rotation.y += 0.0012
      cube.rotation.z += 0.001
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight * 0.7
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
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
      }, 80)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentSkill.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 40)
    } else if (!isDeleting && charIndex === currentSkill.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setSkillIndex((skillIndex + 1) % skills.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, skillIndex, skills])

  return (
    <section id="home" className={styles.hero}>
      <div ref={containerRef} className={styles.canvas}></div>

      <div className={styles.bgGradient}></div>

      <div className={styles.content}>
        <h1 className={`gradient-text ${styles.title}`}>Raja Kumar</h1>
        <p className={styles.subtitle}>Full-Stack Developer | 3D Web Specialist | Creative Technologist</p>

        <div className={styles.typingContainer}>
          <span>Crafting </span>
          <span className={styles.typedText}>{typedText}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <div className={styles.buttons}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            Download Resume
          </a>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.dot}></div>
        </div>
      </div>
    </section>
  )
}
