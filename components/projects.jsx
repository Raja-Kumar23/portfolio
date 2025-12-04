"use client"

import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState("projects")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
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

  const projects = [
    {
      title: "KIITHub.in",
      description:
        "A comprehensive platform for KIIT students featuring resources, community features, and academic tools for enhanced learning experience.",
      tags: ["Next.js", "Firebase", "CSS", "JavaScript"],
      link: "https://kiithub.in",
      screenshot: "/kiithub.png",
      badge: "Live Project",
    },
    
  ]

const works = [
    {
        title: "Online Learning Platform (In development)",
        description:
            "A comprehensive online learning platform featuring course management, video streaming, progress tracking, and interactive quizzes for enhanced student engagement.",
        tags: ["Next.js", "Firebase", "Firestore", "Video Streaming"],
        link: "https://excellpro-client-work.vercel.app/",
        screenshot: "/excellmaster.png",
        badge: "In Development",
        
    },
]

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="section-header reveal">
        <p className="section-subtitle">My Recent Work</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="project-tabs reveal">
        <button
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          My Projects
        </button>
        <button className={`tab-btn ${activeTab === "works" ? "active" : ""}`} onClick={() => setActiveTab("works")}>
          My Works
        </button>
      </div>

      <div className="tab-content">
        {/* Projects Tab with Screenshots */}
        <div className={`tab-panel ${activeTab === "projects" ? "active" : ""}`}>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card reveal"
                onClick={() => project.link !== "#" && window.open(project.link, "_blank")}
              >
                <div className="project-screenshot">
                  <img src={project.screenshot || "/placeholder.svg"} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="project-info">
                  {project.badge && <div className="project-badge">{project.badge}</div>}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Works Tab with Screenshots */}
        <div className={`tab-panel ${activeTab === "works" ? "active" : ""}`}>
          <div className="works-grid">
            {works.map((work, index) => (
              <div key={index} className={`work-card reveal stagger-${index + 1}`}>
                <div className="work-screenshot">
                  <img src={work.screenshot || "/placeholder.svg"} alt={work.title} />
                </div>
                <div className="work-info">
                  <h4 className="work-card-title">{work.title}</h4>
                  <p className="work-card-description">{work.description}</p>
                  <div className="work-card-tags">
                    {work.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="work-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
