"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [projects] = useState([
    {
      id: 1,
      title: "KIITHub",
      description: "Collaborative platform connecting students, enabling resource sharing and project collaboration.",
      image: "/collaborative-platform-dashboard.jpg",
      features: ["User Authentication", "Real-time Collaboration", "Resource Library", "Project Management"],
      tech: ["React", "Firebase", "Custom CSS", "Three.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "3D Portfolio Showcase",
      description: "Interactive 3D web experience with advanced animations and immersive user interface.",
      image: "/3d-web-design-interface.jpg",
      features: ["3D Graphics", "Interactive Elements", "Responsive Design", "Performance Optimized"],
      tech: ["Three.js", "Next.js", "WebGL", "Vanilla CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ])

  return (
    <section
      id="projects"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(168, 85, 247, 0.05) 100%)",
        padding: "6rem 2rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            fontSize: "3.5rem",
            fontWeight: "900",
            background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Featured Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{
                borderRadius: "1.5rem",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 212, 255, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-20px) scale(1.02)"
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 212, 255, 0.3)"
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 212, 255, 0.1)"
                e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
              }}
            >
              {/* Project Image */}
              <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15) rotate(2deg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
                    opacity: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "opacity 0.3s ease",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <button
                    className="btn-primary"
                    style={{
                      padding: "0.75rem 1.5rem",
                      fontSize: "0.95rem",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: "2rem" }}>
                <h3
                  style={{
                    color: "#00d4ff",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#a0aec0",
                    marginBottom: "1.5rem",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.8rem",
                          background: "rgba(0, 212, 255, 0.15)",
                          color: "#00d4ff",
                          padding: "0.4rem 0.9rem",
                          borderRadius: "9999px",
                          border: "1px solid rgba(0, 212, 255, 0.3)",
                          transition: "all 0.3s ease",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(0, 212, 255, 0.3)"
                          e.currentTarget.style.transform = "scale(1.05)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(0, 212, 255, 0.15)"
                          e.currentTarget.style.transform = "scale(1)"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(0, 212, 255, 0.1)",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#00d4ff",
                      fontWeight: "700",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a855f7"
                      e.currentTarget.style.transform = "translateX(5px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#00d4ff"
                      e.currentTarget.style.transform = "translateX(0)"
                    }}
                  >
                    → GitHub Repo
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a855f7",
                      fontWeight: "700",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00d4ff"
                      e.currentTarget.style.transform = "translateX(5px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a855f7"
                      e.currentTarget.style.transform = "translateX(0)"
                    }}
                  >
                    → Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            style={{
              position: "fixed",
              inset: "0",
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(8px)",
              zIndex: "50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              animation: "fadeIn 0.3s ease",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                borderRadius: "2rem",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "85vh",
                overflowY: "auto",
                padding: "2.5rem",
                animation: "slideUp 0.4s ease",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  float: "right",
                  color: "#00d4ff",
                  fontSize: "2rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: "0",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotate(90deg) scale(1.2)"
                  e.currentTarget.style.color = "#a855f7"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotate(0deg) scale(1)"
                  e.currentTarget.style.color = "#00d4ff"
                }}
              >
                ×
              </button>

              <h2
                style={{
                  color: "#00d4ff",
                  fontSize: "2rem",
                  fontWeight: "900",
                  marginBottom: "1.5rem",
                  marginTop: "0",
                }}
              >
                {selectedProject.title}
              </h2>

              <p style={{ color: "#a0aec0", marginBottom: "2rem", fontSize: "1.05rem", lineHeight: "1.7" }}>
                {selectedProject.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#00d4ff", fontWeight: "800", marginBottom: "1rem" }}>Key Features</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#a0aec0",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        transition: "all 0.3s ease",
                        padding: "0.5rem",
                        borderRadius: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                        e.currentTarget.style.paddingLeft = "1rem"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "none"
                        e.currentTarget.style.paddingLeft = "0.5rem"
                      }}
                    >
                      <span style={{ color: "#00d4ff", fontWeight: "bold", fontSize: "1.2rem" }}>→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#00d4ff", fontWeight: "800", marginBottom: "1rem" }}>Technologies</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))",
                        color: "#00d4ff",
                        padding: "0.7rem 1.2rem",
                        borderRadius: "1rem",
                        border: "1px solid rgba(0, 212, 255, 0.3)",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)"
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 212, 255, 0.2)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: "1", textAlign: "center", padding: "1rem" }}
                >
                  View on GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: "1", textAlign: "center", padding: "1rem" }}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
