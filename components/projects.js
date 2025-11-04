"use client"

import { useState } from "react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [projects] = useState([
    {
      id: 1,
      title: "KIITHub",
      description: "A collaborative platform for KIIT students to share resources, projects, and connect with peers.",
      image: "/collaboration-platform.jpg",
      features: ["User authentication", "Resource sharing", "Real-time notifications", "Project collaboration"],
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Cricket Tournament Manager",
      description: "Full-featured tournament management system with live scoring and leaderboards.",
      image: "/sports-management.jpg",
      features: ["Tournament creation", "Live scoring", "Player statistics", "Leaderboard system"],
      tech: ["Node.js", "MongoDB", "React"],
    },
    {
      id: 3,
      title: "Advanced Calculator",
      description: "Scientific calculator with history, themes, and keyboard support.",
      image: "/calculator-app.png",
      features: ["Scientific operations", "Calculation history", "Dark/Light theme", "Keyboard support"],
      tech: ["JavaScript", "HTML/CSS", "Responsive"],
    },
    {
      id: 4,
      title: "Task Manager Pro",
      description: "Productivity app with task categorization, reminders, and cloud sync.",
      image: "/task-management-board.png",
      features: ["Task management", "Category organization", "Due date reminders", "Cloud sync"],
      tech: ["React", "Firebase", "PWA"],
    },
  ])

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-bg-card/50 to-accent-purple/5">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-lg hover:-translate-y-3 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              style={{ animation: `fadeInUp 0.6s ease-out` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="btn-primary">View Details</button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-primary text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="text-primary font-semibold hover:text-primary-light transition-colors">
                    Live Demo
                  </a>
                  <a href="#" className="text-primary font-semibold hover:text-primary-light transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-effect rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="float-right text-primary text-2xl hover:rotate-90 transition-transform"
                >
                  ×
                </button>

                <h2 className="text-primary text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-text-secondary mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-primary font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-text-secondary flex items-center gap-2">
                        <span className="text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-primary font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary/20 text-primary px-4 py-2 rounded-lg border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="#" className="btn-primary">
                    Live Demo
                  </a>
                  <a href="#" className="btn-secondary">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
