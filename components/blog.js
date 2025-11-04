"use client"

export default function Blog() {
  const articles = [
    {
      date: "Oct 15, 2024",
      title: "Getting Started with React Hooks",
      excerpt: "A comprehensive guide to understanding and using React Hooks in your projects.",
    },
    {
      date: "Oct 10, 2024",
      title: "Firebase Authentication Best Practices",
      excerpt: "Explore security best practices when implementing Firebase authentication.",
    },
    {
      date: "Oct 5, 2024",
      title: "Building Responsive Web Designs",
      excerpt: "Master the art of creating responsive designs across all devices.",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-bg-card/50 to-accent-purple/5">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Latest Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="glass-effect p-8 rounded-xl hover:border-primary transition-all hover:shadow-lg hover:-translate-y-2"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              <p className="text-primary text-sm font-semibold mb-3">{article.date}</p>
              <h3 className="text-text-primary text-xl font-bold mb-4">{article.title}</h3>
              <p className="text-text-secondary mb-6">{article.excerpt}</p>
              <a href="#" className="text-primary font-semibold hover:text-primary-light transition-colors">
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
