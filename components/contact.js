"use client"

import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: serverTimestamp(),
      })
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus(""), 5000)
    } catch (error) {
      setStatus("error")
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.bgOrb1}></div>
      <div style={styles.bgOrb2}></div>

      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 8vw, 4rem)", position: "relative", zIndex: 1 }}>
          <h2 style={styles.heading}>✨ Let's Create Something Amazing</h2>
          <p style={styles.subheading}>I'm always interested in hearing about new projects and opportunities</p>
        </div>

        <div style={styles.contentGrid}>
          <div style={{ animation: "slideInRotate 0.8s ease-out" }}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={styles.input}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#00d9ff"
                    e.currentTarget.style.background = "rgba(0, 217, 255, 0.08)"
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 10px rgba(0, 217, 255, 0.05)"
                    e.currentTarget.style.transform = "translateZ(10px)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.2)"
                    e.currentTarget.style.background = "rgba(0, 217, 255, 0.03)"
                    e.currentTarget.style.boxShadow = "none"
                    e.currentTarget.style.transform = "translateZ(0px)"
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={styles.input}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#a855f7"
                    e.currentTarget.style.background = "rgba(168, 85, 247, 0.08)"
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(168, 85, 247, 0.2), inset 0 0 10px rgba(168, 85, 247, 0.05)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.2)"
                    e.currentTarget.style.background = "rgba(0, 217, 255, 0.03)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or ideas..."
                  style={styles.textarea}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#ec4899"
                    e.currentTarget.style.background = "rgba(236, 72, 153, 0.08)"
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(236, 72, 153, 0.2), inset 0 0 10px rgba(236, 72, 153, 0.05)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0, 217, 255, 0.2)"
                    e.currentTarget.style.background = "rgba(0, 217, 255, 0.03)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                ></textarea>
              </div>

              <button type="submit" disabled={loading} style={styles.submitBtn}>
                <span style={{ position: "relative", zIndex: 2 }}>{loading ? "Sending..." : "Send Message"}</span>
              </button>

              {status === "success" && (
                <div style={styles.successMessage}>
                  <span>✓ Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div style={styles.errorMessage}>
                  <span>✗ Error sending message. Please try again.</span>
                </div>
              )}
            </form>
          </div>

          <div style={styles.infoSection}>
            <div style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}>
              <div style={styles.infoCard}>
                <div style={{ ...styles.infoIcon, color: "#00d9ff" }}>📧</div>
                <h3 style={styles.infoTitle}>Email</h3>
                <a href="mailto:raja@example.com" style={styles.infoLink}>
                  raja@example.com
                </a>
              </div>
            </div>

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}>
              <div style={styles.infoCard}>
                <div style={{ ...styles.infoIcon, color: "#a855f7" }}>📱</div>
                <h3 style={styles.infoTitle}>Phone</h3>
                <a href="tel:+919876543210" style={styles.infoLink}>
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}>
              <div style={styles.infoCard}>
                <div style={{ ...styles.infoIcon, color: "#ec4899" }}>📍</div>
                <h3 style={styles.infoTitle}>Location</h3>
                <p style={styles.infoText}>Bhubaneswar, Odisha, India</p>
              </div>
            </div>

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}>
              <div style={styles.socialCard}>
                <h3 style={styles.infoTitle}>Connect With Me</h3>
                <div style={styles.socialLinks}>
                  {[
                    { label: "GitHub", emoji: "🐙", url: "https://github.com", color: "#00d9ff" },
                    { label: "LinkedIn", emoji: "💼", url: "https://linkedin.com", color: "#a855f7" },
                    { label: "Facebook", emoji: "📘", url: "https://facebook.com", color: "#3b82f6" },
                    { label: "Instagram", emoji: "📷", url: "https://instagram.com", color: "#ec4899" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                      style={{
                        ...styles.socialButton,
                        borderColor: social.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = social.color
                        e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(15deg) rotateX(-10deg) scale(1.1)"
                        e.currentTarget.style.boxShadow = `0 15px 50px ${social.color}60`
                        e.currentTarget.style.color = "#0a0e27"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(0, 212, 255, 0.08)"
                        e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)"
                        e.currentTarget.style.boxShadow = `0 5px 20px ${social.color}20`
                        e.currentTarget.style.color = social.color
                      }}
                    >
                      {social.emoji}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "clamp(2rem, 6vw, 4rem) clamp(1rem, 3vw, 2rem)",
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(168, 85, 247, 0.05) 50%, rgba(236, 72, 153, 0.03) 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  bgOrb1: {
    position: "absolute",
    top: "-10%",
    left: "-5%",
    width: "clamp(250px, 50vw, 400px)",
    height: "clamp(250px, 50vw, 400px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)",
    filter: "blur(80px)",
    animation: "floatGlow 10s ease-in-out infinite",
    pointerEvents: "none",
  },
  bgOrb2: {
    position: "absolute",
    bottom: "-10%",
    right: "-5%",
    width: "clamp(200px, 40vw, 350px)",
    height: "clamp(200px, 40vw, 350px)",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
    filter: "blur(80px)",
    animation: "floatGlow 12s ease-in-out infinite 1s",
    pointerEvents: "none",
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
    fontWeight: "900",
    textAlign: "center",
    background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "0.5rem",
  },
  subheading: {
    color: "var(--text-secondary)",
    fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
    marginTop: "1rem",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "clamp(2rem, 6vw, 4rem)",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 4vw, 2rem)",
    animation: "fadeInUp 0.8s ease-out",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    color: "var(--text-primary)",
    fontWeight: "600",
    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
    background: "linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  input: {
    background: "rgba(0, 217, 255, 0.03)",
    border: "1.5px solid rgba(0, 217, 255, 0.2)",
    color: "var(--text-primary)",
    padding: "clamp(0.75rem, 2vw, 1rem) clamp(0.875rem, 2vw, 1.25rem)",
    borderRadius: "0.75rem",
    fontFamily: "inherit",
    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
    transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
    boxSizing: "border-box",
    backdropFilter: "blur(10px)",
  },
  textarea: {
    background: "rgba(0, 217, 255, 0.03)",
    border: "1.5px solid rgba(0, 217, 255, 0.2)",
    color: "var(--text-primary)",
    padding: "clamp(0.75rem, 2vw, 1rem) clamp(0.875rem, 2vw, 1.25rem)",
    borderRadius: "0.75rem",
    fontFamily: "inherit",
    fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
    transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
    resize: "vertical",
    boxSizing: "border-box",
    backdropFilter: "blur(10px)",
    minHeight: "clamp(120px, 30vh, 200px)",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #00d9ff 0%, #06b6d4 100%)",
    color: "#0a0e27",
    padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.25rem, 3vw, 2.5rem)",
    borderRadius: "0.75rem",
    fontWeight: "700",
    fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    width: "100%",
  },
  successMessage: {
    background: "rgba(74, 222, 128, 0.1)",
    border: "1px solid #4ade80",
    color: "#4ade80",
    padding: "clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)",
    borderRadius: "0.75rem",
    textAlign: "center",
    animation: "fadeInUp 0.3s ease",
    fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
  },
  errorMessage: {
    background: "rgba(248, 113, 113, 0.1)",
    border: "1px solid #f87171",
    color: "#f87171",
    padding: "clamp(0.75rem, 2vw, 1.5rem) clamp(1rem, 2vw, 1.5rem)",
    borderRadius: "0.75rem",
    textAlign: "center",
    animation: "fadeInUp 0.3s ease",
    fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
  },
  infoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 3vw, 2rem)",
  },
  infoCard: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(0, 217, 255, 0.2)",
    borderRadius: "1rem",
    padding: "clamp(1rem, 3vw, 2rem)",
    transition: "all 0.3s ease",
    transform: "perspective(1000px)",
  },
  socialCard: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(0, 217, 255, 0.2)",
    borderRadius: "1rem",
    padding: "clamp(1rem, 3vw, 2rem)",
  },
  infoIcon: {
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
    marginBottom: "0.75rem",
  },
  infoTitle: {
    color: "var(--text-primary)",
    fontWeight: "700",
    fontSize: "clamp(0.95rem, 2.2vw, 1.25rem)",
    marginBottom: "0.5rem",
  },
  infoLink: {
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    display: "inline-block",
  },
  infoText: {
    color: "var(--text-secondary)",
    fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
    margin: 0,
  },
  socialLinks: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
    gap: "clamp(0.75rem, 2vw, 1rem)",
    marginTop: "1rem",
  },
  socialButton: {
    width: "100%",
    aspectRatio: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 212, 255, 0.08)",
    border: "2px solid",
    borderRadius: "0.75rem",
    fontSize: "clamp(1rem, 3vw, 1.5rem)",
    transition: "all 0.3s cubic-bezier(0.23, 1, 0.320, 1)",
    cursor: "pointer",
    textDecoration: "none",
    transformStyle: "preserve-3d",
  },
}
