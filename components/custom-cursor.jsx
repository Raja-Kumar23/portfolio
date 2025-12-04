"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [trails, setTrails] = useState([])
  const [splashes, setSplashes] = useState([])
  const [isHovering, setIsHovering] = useState(false)
  const trailId = useRef(0)
  const splashId = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current

    if (!cursor || !dot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Update dot position immediately
      dot.style.left = mouseX + "px"
      dot.style.top = mouseY + "px"

      // Add trail
      trailId.current++
      const newTrail = {
        id: trailId.current,
        x: mouseX,
        y: mouseY,
      }
      setTrails((prev) => [...prev.slice(-8), newTrail])
    }

    const handleClick = (e) => {
      splashId.current++
      const newSplash = {
        id: splashId.current,
        x: e.clientX,
        y: e.clientY,
      }
      setSplashes((prev) => [...prev, newSplash])

      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id))
      }, 600)
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      cursor.style.left = cursorX + "px"
      cursor.style.top = cursorY + "px"

      requestAnimationFrame(animate)
    }

    // Handle hover states
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("btn") ||
        e.target.classList.contains("skill-card") ||
        e.target.classList.contains("social-link") ||
        e.target.classList.contains("contact-link") ||
        e.target.classList.contains("featured-project-card")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)
    animate()

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  // Clean up old trails
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTrails((prev) => prev.slice(-4))
    }, 100)
    return () => clearTimeout(timeout)
  }, [trails])

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${isHovering ? "hover" : ""}`} />
      <div ref={dotRef} className="cursor-dot" />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: ((index + 1) / trails.length) * 0.5,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="cursor-splash"
          style={{
            left: splash.x,
            top: splash.y,
          }}
        />
      ))}
    </>
  )
}
