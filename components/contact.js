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
    <section id="contact" className="py-20 bg-gradient-to-br from-accent-purple/8 to-bg-card/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <div>
              <label className="block text-text-primary font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-primary/5 border border-primary/20 text-text-primary px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:bg-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-text-primary font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-primary/5 border border-primary/20 text-text-primary px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:bg-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-text-primary font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-primary/5 border border-primary/20 text-text-primary px-4 py-3 rounded-lg focus:outline-none focus:border-primary focus:bg-primary/10 transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="text-green-400 text-center">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-center">Error sending message. Please try again.</p>}
          </form>

          {/* Contact Info */}
          <div className="space-y-8" style={{ animation: "fadeInUp 1s ease-out" }}>
            <div>
              <h3 className="text-primary font-bold text-lg mb-2">Email</h3>
              <a href="mailto:raja@example.com" className="text-text-secondary hover:text-primary transition-colors">
                raja@example.com
              </a>
            </div>

            <div>
              <h3 className="text-primary font-bold text-lg mb-2">Phone</h3>
              <a href="tel:+919876543210" className="text-text-secondary hover:text-primary transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div>
              <h3 className="text-primary font-bold text-lg mb-2">Location</h3>
              <p className="text-text-secondary">Bhubaneswar, Odisha, India</p>
            </div>

            <div>
              <h3 className="text-primary font-bold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary rounded-full text-primary hover:bg-primary hover:text-bg-dark transition-all"
                >
                  G
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary rounded-full text-primary hover:bg-primary hover:text-bg-dark transition-all"
                >
                  L
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary rounded-full text-primary hover:bg-primary hover:text-bg-dark transition-all"
                >
                  T
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
