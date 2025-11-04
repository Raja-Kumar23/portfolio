"use client"

export default function Education() {
  const stages = [
    {
      number: "01",
      title: "School",
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
    <section id="education" className="py-20 bg-gradient-to-br from-bg-card/50 to-accent-purple/5">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Education Journey</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, idx) => (
            <div key={idx} style={{ animation: "fadeInUp 0.8s ease-out" }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent opacity-30">
                  {stage.number}
                </div>
                <h3 className="text-primary text-2xl font-bold">{stage.title}</h3>
              </div>

              <div className="space-y-6">
                {stage.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="relative pl-8">
                    <div
                      className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-bg-dark"
                      style={{ boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
                    ></div>

                    <div className="glass-effect p-6 rounded-lg hover:border-primary transition-all hover:shadow-lg hover:translate-x-2">
                      <h4 className="text-primary font-bold mb-1">{item.title}</h4>
                      <p className="text-primary text-sm font-semibold mb-1">{item.date}</p>
                      <p className="text-text-secondary text-sm mb-2">{item.org}</p>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
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
