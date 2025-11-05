"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      category: "Frontend",
      icon: "💻",
      items: [
        { name: "HTML & CSS", percent: 95 },
        { name: "JavaScript", percent: 90 },
        { name: "React & Three.js", percent: 85 },
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      items: [
        { name: "Node.js", percent: 85 },
        { name: "Firebase", percent: 80 },
        { name: "Databases", percent: 88 },
      ],
    },
    {
      category: "Design & Tools",
      icon: "🎨",
      items: [
        { name: "Git & GitHub", percent: 90 },
        { name: "3D Graphics", percent: 92 },
        { name: "Web Performance", percent: 88 },
      ],
    },
  ])

  const [animatedSkills, setAnimatedSkills] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newAnimated = {}
            skills.forEach((category, catIdx) => {
              category.items.forEach((skill, skillIdx) => {
                newAnimated[`${catIdx}-${skillIdx}`] = skill.percent
              })
            })
            setAnimatedSkills(newAnimated)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [skills])

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(15, 23, 42, 0.5) 100%)",
        padding: "clamp(3rem, 8vw, 6rem) 2rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "clamp(2rem, 6vw, 4rem)",
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Skills & Expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 90vw, 350px), 1fr))",
            gap: "clamp(1.5rem, 4vw, 2rem)",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {skills.map((category, catIdx) => (
            <div
              key={catIdx}
              style={{
                background: "rgba(0, 212, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                padding: "clamp(1.5rem, 5vw, 2rem)",
                borderRadius: "1rem",
                animation: `fadeInUp ${0.8 + catIdx * 0.2}s ease-out`,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 212, 255, 0.2)"
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 212, 255, 0.1)"
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.75rem" }}>{category.icon}</span>
                <h3
                  style={{
                    color: "#00d4ff",
                    fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                    fontWeight: "800",
                    margin: 0,
                  }}
                >
                  {category.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 3vw, 1.5rem)" }}>
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--text-primary)",
                          fontWeight: "600",
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          color: "#00d4ff",
                          fontWeight: "700",
                          fontSize: "clamp(0.85rem, 2vw, 1rem)",
                        }}
                      >
                        {animatedSkills[`${catIdx}-${skillIdx}`] || 0}%
                      </span>
                    </div>
                    <div
                      style={{
                        background: "rgba(0, 212, 255, 0.1)",
                        height: "8px",
                        borderRadius: "9999px",
                        overflow: "hidden",
                        border: "1px solid rgba(0, 212, 255, 0.2)",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          background: "linear-gradient(90deg, #00d4ff, #a855f7)",
                          width: animatedSkills[`${catIdx}-${skillIdx}`]
                            ? `${animatedSkills[`${catIdx}-${skillIdx}`]}%`
                            : "0%",
                          animation: "slideIn 1.5s ease-out",
                          borderRadius: "9999px",
                          boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)",
                          transition: "width 0.3s ease",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
