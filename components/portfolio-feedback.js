"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, query, orderBy, limit, onSnapshot } from "firebase/firestore"

export default function PortfolioFeedback() {
  const [feedbacks, setFeedbacks] = useState([])
  const [newFeedback, setNewFeedback] = useState({ name: "", email: "", message: "", rating: 5 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)

  // Load feedbacks from Firebase
  useEffect(() => {
    const q = query(collection(db, "portfolio_feedback"), orderBy("timestamp", "desc"), limit(10))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setFeedbacks(data)
    })
    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newFeedback.name || !newFeedback.email || !newFeedback.message) {
      alert("Please fill all fields")
      return
    }

    setIsSubmitting(true)
    try {
      await addDoc(collection(db, "portfolio_feedback"), {
        name: newFeedback.name,
        email: newFeedback.email,
        message: newFeedback.message,
        rating: newFeedback.rating,
        timestamp: new Date(),
      })
      setNewFeedback({ name: "", email: "", message: "", rating: 5 })
      setShowForm(false)
    } catch (error) {
      console.error("Error submitting feedback:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length)
  }

  if (feedbacks.length === 0) {
    return null
  }

  return (
    <section
      id="feedback"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.08) 0%, rgba(30, 30, 46, 0.5) 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "3.5rem",
            fontWeight: "900",
            background: "linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Client Feedback
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#a0aec0",
            marginBottom: "4rem",
            fontSize: "1.1rem",
          }}
        >
          Real feedback from people who've worked with me
        </p>

        {/* Feedback Carousel */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            borderRadius: "1.5rem",
            padding: "3rem",
            marginBottom: "3rem",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            animation: "fadeInUp 0.6s ease-out",
          }}
        >
          {feedbacks[currentIndex] && (
            <>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "1.5rem",
                        color: i < feedbacks[currentIndex].rating ? "#fbbf24" : "rgba(255, 191, 36, 0.3)",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    color: "#e0e7ff",
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                    margin: "0",
                  }}
                >
                  "{feedbacks[currentIndex].message}"
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(0, 212, 255, 0.1)",
                  paddingTop: "2rem",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#00d4ff",
                      fontWeight: "800",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {feedbacks[currentIndex].name}
                  </p>
                  <p
                    style={{
                      color: "#a0aec0",
                      fontSize: "0.9rem",
                      margin: "0",
                    }}
                  >
                    {feedbacks[currentIndex].email}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    onClick={handlePrevious}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: "rgba(0, 212, 255, 0.1)",
                      border: "1px solid #00d4ff",
                      color: "#00d4ff",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00d4ff"
                      e.currentTarget.style.color = "#050812"
                      e.currentTarget.style.transform = "scale(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                      e.currentTarget.style.color = "#00d4ff"
                      e.currentTarget.style.transform = "scale(1)"
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: "rgba(0, 212, 255, 0.1)",
                      border: "1px solid #00d4ff",
                      color: "#00d4ff",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00d4ff"
                      e.currentTarget.style.color = "#050812"
                      e.currentTarget.style.transform = "scale(1.1)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(0, 212, 255, 0.1)"
                      e.currentTarget.style.color = "#00d4ff"
                      e.currentTarget.style.transform = "scale(1)"
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Feedback Form Toggle */}
        {!showForm && (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary"
              style={{
                padding: "1rem 2rem",
                fontSize: "1rem",
              }}
            >
              Share Your Feedback
            </button>
          </div>
        )}

        {/* Feedback Form */}
        {showForm && (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: "1.5rem",
              padding: "2.5rem",
              animation: "slideUp 0.4s ease",
            }}
          >
            <h3 style={{ color: "#00d4ff", fontSize: "1.5rem", marginTop: "0", marginBottom: "1.5rem" }}>
              Leave Your Feedback
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newFeedback.name}
                  onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: "0.75rem",
                    padding: "0.875rem",
                    color: "#fff",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)"
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={newFeedback.email}
                  onChange={(e) => setNewFeedback({ ...newFeedback, email: e.target.value })}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: "0.75rem",
                    padding: "0.875rem",
                    color: "#fff",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)"
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                    e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ color: "#a0aec0", display: "block", marginBottom: "0.5rem" }}>Rating</label>
                <select
                  value={newFeedback.rating}
                  onChange={(e) => setNewFeedback({ ...newFeedback, rating: Number.parseInt(e.target.value) })}
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: "0.75rem",
                    padding: "0.875rem",
                    color: "#fff",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Stars
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="Your Feedback (max 500 characters)"
                value={newFeedback.message}
                onChange={(e) => setNewFeedback({ ...newFeedback, message: e.target.value.slice(0, 500) })}
                maxLength={500}
                style={{
                  width: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(0, 212, 255, 0.2)",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  color: "#fff",
                  fontSize: "1rem",
                  minHeight: "120px",
                  marginBottom: "1.5rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.4)"
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.1)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
                  e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.2)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              />

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    flex: "1",
                    padding: "1rem",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary"
                  style={{
                    flex: "1",
                    padding: "1rem",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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
