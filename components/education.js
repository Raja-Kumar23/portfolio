"use client"

export default function Education() {
  const stages = [
    {
      number: "01",
      title: "School",
      icon: "🏫",
      color: "#00d9ff",
      items: [
        {
          title: "Secondary (10th)",
          date: "2017 - 2019",
          org: "Delhi Public School, Bhubaneswar",
          desc: "CGPA: 9.8/10 | Merit Certificate",
        },
      ],
    },
    {
      number: "02",
      title: "College",
      icon: "🎓",
      color: "#a855f7",
      items: [
        {
          title: "Senior Secondary (12th)",
          date: "2019 - 2021",
          org: "Delhi Public School, Bhubaneswar",
          desc: "Percentage: 92% | Stream: Science (PCM)",
        },
      ],
    },
    {
      number: "03",
      title: "University",
      icon: "📚",
      color: "#ec4899",
      items: [
        {
          title: "B.Tech in Computer Science & Engineering",
          date: "2021 - 2025",
          org: "KIIT University, Bhubaneswar",
          desc: "CGPA: 8.5/10 | Relevant Coursework: Data Structures, Web Development",
        },
      ],
    },
  ]

  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 8vw, 4rem)", position: "relative" }}>
          <div style={styles.gradientOrb}></div>
          <h2 style={styles.heading}>📖 Education Journey</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", marginTop: "0.5rem" }}>
            Crafting my path through knowledge and growth
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(280px, 90vw, 350px), 1fr))",
            gap: "clamp(1.5rem, 4vw, 2.5rem)",
            maxWidth: "1200px",
            margin: "0 auto",
            perspective: "1000px",
          }}
        >
          {stages.map((stage, idx) => (
            <div
              key={idx}
              style={{
                ...styles.stageCard,
                animation: `card3D ${0.8 + idx * 0.2}s ease-out both`,
                borderColor: stage.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(5deg) rotateX(-5deg) translateZ(30px)"
                e.currentTarget.style.boxShadow = `0 20px 60px ${stage.color}40, inset 0 0 20px ${stage.color}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)"
                e.currentTarget.style.boxShadow = `0 10px 30px ${stage.color}20`
              }}
            >
              <div style={{ ...styles.stageIndicator, background: stage.color }}>
                <div style={styles.stageNumber}>{stage.number}</div>
              </div>

              <div style={styles.stageHeader}>
                <div style={styles.iconWrapper}>{stage.icon}</div>
                <h3 style={{ ...styles.stageTitle, color: stage.color }}>{stage.title}</h3>
              </div>

              <div style={styles.itemsContainer}>
                {stage.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={styles.itemWrapper}>
                    <div style={{ ...styles.dot, background: stage.color }}></div>
                    <div
                      style={styles.itemCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = stage.color
                        e.currentTarget.style.background = `rgba(${stage.color === "#00d9ff" ? "0, 217, 255" : stage.color === "#a855f7" ? "168, 85, 247" : "236, 72, 153"}, 0.1)`
                        e.currentTarget.style.boxShadow = `0 0 30px ${stage.color}40, inset 0 0 15px ${stage.color}10`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      <h4 style={styles.itemTitle}>{item.title}</h4>
                      <p style={{ ...styles.itemDate, color: stage.color }}>{item.date}</p>
                      <p style={styles.itemOrg}>{item.org}</p>
                      <p style={styles.itemDesc}>{item.desc}</p>
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

const styles = {
  section: {
    padding: "clamp(3rem, 8vw, 6rem) 2rem",
    background:
      "linear-gradient(135deg, rgba(30, 30, 46, 0.3) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.03) 100%)",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  gradientOrb: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
    filter: "blur(60px)",
    animation: "floatGlow 8s ease-in-out infinite",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    fontSize: "clamp(2rem, 8vw, 3.5rem)",
    fontWeight: "900",
    textAlign: "center",
    background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "fadeInUp 1s ease-out",
  },
  stageCard: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(20px)",
    border: "2px solid rgba(0, 217, 255, 0.2)",
    borderRadius: "1.5rem",
    padding: "clamp(1.5rem, 4vw, 2.5rem)",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
    position: "relative",
    overflow: "hidden",
    transformStyle: "preserve-3d",
  },
  stageIndicator: {
    position: "absolute",
    top: "-20px",
    right: "-20px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    opacity: 0.1,
    filter: "blur(1px)",
  },
  stageNumber: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: "900",
    textAlign: "center",
    paddingTop: "0.5rem",
  },
  stageHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
    position: "relative",
    zIndex: 2,
  },
  iconWrapper: {
    fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
    animation: "rotateAxis 20s linear infinite",
    transformStyle: "preserve-3d",
  },
  stageTitle: {
    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
    fontWeight: "700",
    margin: 0,
    background: "transparent",
    WebkitTextFillColor: "unset",
    backgroundClip: "unset",
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 3vw, 1.5rem)",
  },
  itemWrapper: {
    position: "relative",
    paddingLeft: "2.5rem",
  },
  dot: {
    position: "absolute",
    left: 0,
    top: "0.5rem",
    width: "1.25rem",
    height: "1.25rem",
    background: "#00d9ff",
    borderRadius: "50%",
    border: "4px solid #0a0e27",
    boxShadow: "0 0 30px currentColor",
    animation: "pulse 2s ease-in-out infinite",
  },
  itemCard: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 212, 255, 0.2)",
    borderRadius: "1rem",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    transition: "all 0.3s ease",
    position: "relative",
    zIndex: 2,
  },
  itemTitle: {
    color: "#00d9ff",
    fontWeight: "700",
    marginBottom: "0.5rem",
    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
  },
  itemDate: {
    color: "#00d9ff",
    fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  itemOrg: {
    color: "#a0aec0",
    fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)",
    marginBottom: "0.75rem",
  },
  itemDesc: {
    color: "#a0aec0",
    fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
    lineHeight: "1.6",
  },
}
