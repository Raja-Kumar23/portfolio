"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      text: '"Raja is an exceptional developer with a keen eye for detail and a passion for creating elegant solutions. His work exceeded expectations."',
      author: "Prof. Amit Kumar, KIIT University",
    },
    {
      text: '"Working with Raja was a pleasure. He brings creativity and technical expertise to every project. Highly recommended!"',
      author: "Priya Sharma, Project Lead",
    },
    {
      text: '"Raja\'s problem-solving skills and dedication to learning make him a valuable team member."',
      author: "Rahul Verma, Senior Developer",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Testimonials</h2>

        <div style={styles.testimonialWrapper}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>{testimonials[current].text}</p>
            <p style={styles.testimonialAuthor}>{testimonials[current].author}</p>
          </div>

          <div style={styles.buttonContainer}>
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              style={styles.navButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00d4ff"
                e.currentTarget.style.color = "#1e1e2e"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                e.currentTarget.style.color = "#00d4ff"
              }}
            >
              ❮
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              style={styles.navButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00d4ff"
                e.currentTarget.style.color = "#1e1e2e"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                e.currentTarget.style.color = "#00d4ff"
              }}
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "5rem 2rem",
    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(30, 30, 46, 0.5) 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "4rem",
    background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  testimonialWrapper: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  testimonialCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 212, 255, 0.2)",
    borderRadius: "12px",
    padding: "3rem",
    textAlign: "center",
    animation: "fadeInUp 0.8s ease-out",
  },
  testimonialText: {
    color: "#a0aec0",
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
    fontStyle: "italic",
    lineHeight: "1.6",
  },
  testimonialAuthor: {
    color: "#00d4ff",
    fontWeight: "700",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  navButton: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    background: "rgba(0, 212, 255, 0.1)",
    border: "1px solid #00d4ff",
    color: "#00d4ff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1rem",
    fontWeight: "bold",
  },
}
