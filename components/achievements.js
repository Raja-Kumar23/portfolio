"use client"

export default function Achievements() {
  const achievements = [
    { icon: "🏆", title: "Dean's List", org: "KIIT University", year: "2023" },
    { icon: "📜", title: "Web Development Certification", org: "Udemy", year: "2023" },
    { icon: "🥇", title: "Hackathon Winner", org: "KIIT Tech Fest 2023", year: "2023" },
    { icon: "⭐", title: "React Specialist", org: "HackerRank", year: "2024" },
  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-accent-purple/8 to-bg-card/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">
          Achievements & Certifications
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="glass-effect p-8 rounded-xl text-center hover:border-primary transition-all hover:shadow-lg hover:-translate-y-3 relative overflow-hidden group"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <div className="absolute -top-1/2 -right-1/2 w-64 h-64 bg-primary/10 rounded-full group-hover:top-0 group-hover:right-0 transition-all duration-500"></div>

              <div className="text-5xl mb-4 relative z-10" style={{ animation: "bounce 2s infinite" }}>
                {achievement.icon}
              </div>
              <h3 className="text-primary font-bold mb-2 relative z-10">{achievement.title}</h3>
              <p className="text-text-secondary text-sm mb-2 relative z-10">{achievement.org}</p>
              <p className="text-text-muted text-xs relative z-10">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
