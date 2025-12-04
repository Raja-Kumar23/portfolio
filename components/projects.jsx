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
      screenshot: "/kiithub-student-platform-dashboard-with-purple-the.jpg",
      badge: "Live Project",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark/light theme, and contact form integration.",
      tags: ["React", "CSS3", "Animations"],
      link: "#",
      screenshot: "/modern-portfolio-website-with-neon-cyan-theme.jpg",
      badge: "Personal",
    },
  ]

  const works = [
    {
      title: "E-commerce Dashboard",
      description:
        "Designed and developed a complete admin dashboard for an e-commerce platform with analytics and inventory management.",
      tags: ["UI/UX", "React", "Charts"],
      screenshot: "/e-commerce-admin-dashboard-with-sales-analytics.jpg",
    },
    {
      title: "Social Media App UI",
      description:
        "Created a modern social media application interface with stories, posts feed, and messaging features.",
      tags: ["Figma", "Mobile", "Design"],
      screenshot: "/social-media-app-mobile-interface-design.jpg",
    },
    {
      title: "Weather Application",
      description:
        "Built a real-time weather application with location-based forecasts and beautiful weather animations.",
      tags: ["API", "JavaScript", "CSS"],
      screenshot: "/weather-app-showing-sunny-forecast-with-animations.jpg",
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
