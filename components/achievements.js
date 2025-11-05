"use client"

export default function Achievements() {
  const achievements = [
    { icon: "🏆", title: "Dean's List", org: "KIIT University", year: "2023" },
    { icon: "📜", title: "Web Development Certification", org: "Udemy", year: "2023" },
    { icon: "🥇", title: "Hackathon Winner", org: "KIIT Tech Fest 2023", year: "2023" },
    { icon: "⭐", title: "React Specialist", org: "HackerRank", year: "2024" },
  ]

  return (
    <section id="achievements" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Achievements & Certifications</h2>

        <div style={styles.grid}>
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)"
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 212, 255, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div style={styles.icon}>{achievement.icon}</div>
              <h3 style={styles.cardTitle}>{achievement.title}</h3>
              <p style={styles.cardOrg}>{achievement.org}</p>
              <p style={styles.cardYear}>{achievement.year}</p>
            </div>
          ))}
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 212, 255, 0.2)",
    borderRadius: "12px",
    padding: "2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    animation: "fadeInUp 0.6s ease-out",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    animation: "bounce 2s infinite",
  },
  cardTitle: {
    color: "#00d4ff",
    fontWeight: "700",
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
  },
  cardOrg: {
    color: "#a0aec0",
    fontSize: "0.875rem",
    marginBottom: "0.5rem",
  },
  cardYear: {
    color: "#718096",
    fontSize: "0.75rem",
  },
}
