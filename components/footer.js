"use client"

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, rgba(5, 8, 18, 0.95), rgba(15, 23, 42, 0.8))",
        borderTop: "1px solid rgba(0, 212, 255, 0.15)",
        padding: "clamp(2.5rem, 6vw, 4rem) 2rem clamp(1.5rem, 3vw, 2rem)",
        marginTop: "clamp(3rem, 8vw, 6rem)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(clamp(200px, 90vw, 250px), 1fr))",
            gap: "clamp(2rem, 5vw, 3rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <div>
            <h3
              style={{
                color: "var(--primary)",
                fontWeight: "800",
                marginBottom: "1rem",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
              }}
            >
              🗂️ Navigation
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)"
                    e.currentTarget.style.transform = "translateX(5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)"
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                color: "var(--primary)",
                fontWeight: "800",
                marginBottom: "1rem",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
              }}
            >
              🔗 Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "GitHub Repo", href: "https://github.com", emoji: "🐙" },
                { label: "LinkedIn", href: "https://linkedin.com", emoji: "💼" },
                { label: "Download Resume", href: "/resume.pdf", emoji: "📄" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  style={{
                    color: "var(--text-secondary)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)"
                    e.currentTarget.style.transform = "translateX(5px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)"
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  {link.emoji} {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                color: "var(--primary)",
                fontWeight: "800",
                marginBottom: "1rem",
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
              }}
            >
              🌐 Follow Me
            </h3>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { emoji: "🐙", label: "GitHub", url: "https://github.com" },
                { emoji: "💼", label: "LinkedIn", url: "https://linkedin.com" },
                { emoji: "👍", label: "Facebook", url: "https://facebook.com" },
                { emoji: "📷", label: "Instagram", url: "https://instagram.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid var(--primary)",
                    borderRadius: "9999px",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary)"
                    e.currentTarget.style.color = "#050812"
                    e.currentTarget.style.transform = "scale(1.15)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                    e.currentTarget.style.color = "inherit"
                    e.currentTarget.style.transform = "scale(1)"
                  }}
                >
                  {social.emoji}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(0, 212, 255, 0.1)",
            paddingTop: "clamp(1.5rem, 3vw, 2rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--text-secondary)",
              margin: 0,
              fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
            }}
          >
            © 2025 Raja Kumar. All rights reserved.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
              margin: 0,
            }}
          >
            ✨ Crafted with passion using Next.js, React, Three.js & Firebase
          </p>
        </div>
      </div>
    </footer>
  )
}
