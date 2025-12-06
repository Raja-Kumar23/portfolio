"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "./skills.css"

const skills = [
  {
    name: "HTML",
    level: "Advanced",
    color: "#E34F26",
    description: "I build semantic, accessible, and SEO-friendly markup structures for modern web applications.",
  },
  {
    name: "CSS",
    level: "Advanced",
    color: "#1572B6",
    description: "I create stunning layouts, animations, and responsive designs using modern CSS techniques.",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    color: "#F7DF1E",
    description: "I develop interactive web experiences with vanilla JS and modern ES6+ features.",
  },
  {
    name: "React",
    level: "Advanced",
    color: "#61DAFB",
    description: "I build component-based UIs with hooks, context, and state management.",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    color: "#ffffff",
    description: "I create full-stack React applications with server-side rendering and API routes.",
  },
  {
    name: "Firebase",
    level: "Intermediate",
    color: "#FFCA28",
    description: "I integrate real-time databases, authentication, and cloud functions.",
  },
  {
    name: "Git",
    level: "Intermediate",
    color: "#F05032",
    description: "I manage version control, branching strategies, and collaborative workflows.",
  },
  {
    name: "GitHub",
    level: "Intermediate",
    color: "#ffffff",
    description: "I collaborate on projects, manage repositories, and contribute to open source.",
  },
  {
    name: "API",
    level: "Intermediate",
    color: "#00D084",
    description: "I design and build RESTful APIs, handle authentication, and integrate third-party services.",
  },
  {
    name: "DSA",
    level: "Intermediate",
    color: "#FF6B6B",
    description: "I solve complex problems using data structures and algorithms for optimal solutions.",
  },
  {
    name: "C",
    level: "Intermediate",
    color: "#A8B9CC",
    description: "I write efficient low-level programs and understand memory management concepts.",
  },
  {
    name: "Java",
    level: "Intermediate",
    color: "#007396",
    description: "I develop object-oriented applications with strong typing and enterprise patterns.",
  },
  {
    name: "Python",
    level: "Intermediate",
    color: "#3776AB",
    description: "I build scripts, automation tools, and backend services with clean, readable code.",
  },
  {
    name: "SQL",
    level: "Intermediate",
    color: "#4479A1",
    description: "I design database schemas, write complex queries, and optimize database performance.",
  },
]

const iconPaths = {
  HTML: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H8.531l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
  CSS: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
  JavaScript:
    "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65z",
  React:
    "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132z",
  "Next.js":
    "M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361l4.735 7.17 1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0z",
  Firebase:
    "M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z",
  Git: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.6-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.719-1.881.719-2.6 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  API: "M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257.257 3.06-2.6 6.475-2.6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z",
  DSA: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  C: "M15.45 15.97l.35-.57a6.96 6.96 0 0 1-3.8 1.1c-3.77 0-6.84-3.07-6.84-6.84S8.23 2.82 12 2.82c1.44 0 2.77.45 3.87 1.21l-.35-.57C14.14 2.55 13.1 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2.14-.18 3.12-.5l.35-.57a7.89 7.89 0 0 1-3.47.81c-4.42 0-8-3.58-8-8s3.58-8 8-8c1.35 0 2.62.34 3.74.93l-.29-.47z",
  Java: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.218M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627",
  Python:
    "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.20.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.27-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.04-.05-1.23.06-1.22.16-1.04.24-.87.32-.71-.36-.57-.4-.45-.42-.33-.42-.24-.4-.16-.36-.1-.32-.05-.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.29.25-.25.31-.24.38-.2.44-.18.51-.15.58-.13-.64-.09-.71-.07-.77-.04-.84-.01-1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.23.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",
  SQL: "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-5c0 .5-2.13 2-6 2s-6-1.5-6-2V9.77C7.61 10.55 9.72 11 12 11s4.39-.45 6-1.23V12z",
}

export default function SkillsSphere() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [positions, setPositions] = useState([])
  const [, setTick] = useState(0)
  const [sphereRadius, setSphereRadius] = useState(200)
  const angleRef = useRef(0)
  const containerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setSphereRadius(100)
      } else if (width <= 768) {
        setSphereRadius(140)
      } else {
        setSphereRadius(180)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const numSkills = skills.length
    const initialPositions = skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / numSkills)
      const theta = Math.sqrt(numSkills * Math.PI) * phi
      return { phi, theta, floatOffset: Math.random() * Math.PI * 2 }
    })
    setPositions(initialPositions)
  }, [])

  useEffect(() => {
    let animationId
    const animate = () => {
      if (!isHovering) {
        angleRef.current += 0.003
      } else {
        angleRef.current += 0.0005
      }
      setTick((t) => t + 1)
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isHovering])

  const getPosition = useCallback(
    (index) => {
      if (!positions[index]) return { x: 0, y: 0, z: 0, scale: 1, opacity: 1 }
      const { phi, theta, floatOffset } = positions[index]
      const rotatedTheta = theta + angleRef.current
      const x = sphereRadius * Math.sin(phi) * Math.cos(rotatedTheta)
      const y = sphereRadius * Math.sin(phi) * Math.sin(rotatedTheta) + Math.sin(Date.now() * 0.001 + floatOffset) * 5
      const z = sphereRadius * Math.cos(phi)
      const scale = ((z + sphereRadius) / (2 * sphereRadius)) * 0.4 + 0.6
      const opacity = ((z + sphereRadius) / (2 * sphereRadius)) * 0.5 + 0.5
      return { x, y, z, scale, opacity }
    },
    [positions, sphereRadius],
  )

  return (
    <div className="skills-section">
      <div className="expertise-header">
        <span className="expertise-subtitle">What I Work With</span>
        <h2 className="expertise-title">Skills and Technologies</h2>
        <p className="expertise-description">Technologies and tools I use to bring ideas to life</p>
      </div>

      <div
        className="skills-sphere-container"
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="sphere-wrapper">
          {skills.map((skill, index) => {
            const pos = getPosition(index)
            return (
              <button
                key={skill.name}
                type="button"
                className="skill-icon-wrapper"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelectedSkill(skill)
                }}
                onTouchStart={(e) => {
                  e.stopPropagation()
                }}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setSelectedSkill(skill)
                }}
                aria-label={`View ${skill.name} skill details`}
                style={{
                  transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px) scale(${pos.scale})`,
                  opacity: pos.opacity,
                  zIndex: Math.round(pos.z + 250),
                }}
              >
                <div className="skill-icon-circle" style={{ borderColor: skill.color, background: `${skill.color}15` }}>
                  <div className="skill-icon-svg">
                    <svg viewBox="0 0 24 24" fill={skill.color}>
                      <path d={iconPaths[skill.name]} />
                    </svg>
                  </div>
                </div>
                <span className="skill-name-tag">{skill.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {selectedSkill && (
        <div className="popup-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedSkill(null)} aria-label="Close popup">
              ×
            </button>
            <div className="popup-header">
              <div
                className="popup-icon"
                style={{ borderColor: selectedSkill.color, background: `${selectedSkill.color}20` }}
              >
                <svg viewBox="0 0 24 24" fill={selectedSkill.color}>
                  <path d={iconPaths[selectedSkill.name]} />
                </svg>
              </div>
              <div className="popup-title-section">
                <h3 className="popup-title">{selectedSkill.name}</h3>
                <span
                  className="popup-level"
                  style={{ background: `${selectedSkill.color}30`, color: selectedSkill.color }}
                >
                  {selectedSkill.level}
                </span>
              </div>
            </div>
            <p className="popup-description">{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}
