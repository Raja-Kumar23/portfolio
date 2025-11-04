"use client"

import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      category: "Frontend",
      items: [
        { name: "HTML & CSS", percent: 95 },
        { name: "JavaScript", percent: 90 },
        { name: "React", percent: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", percent: 85 },
        { name: "Firebase", percent: 80 },
        { name: "Java", percent: 88 },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", percent: 90 },
        { name: "Responsive Design", percent: 92 },
        { name: "Problem Solving", percent: 88 },
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-accent-purple/8 to-bg-card/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-effect p-8 rounded-xl hover:border-primary transition-all hover:shadow-lg hover:-translate-y-2"
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              <h3 className="text-primary text-xl font-bold mb-6">{category.category}</h3>

              <div className="space-y-6">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary font-semibold">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.percent}%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full"
                        style={{
                          width: animatedSkills[`${catIdx}-${skillIdx}`]
                            ? `${animatedSkills[`${catIdx}-${skillIdx}`]}%`
                            : "0%",
                          animation: "slideIn 1.5s ease-out",
                          boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
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
