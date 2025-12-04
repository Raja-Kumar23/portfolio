"use client";

import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase"; // adjust to relative path if not using @ alias

export default function Contact({ showToast }) {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("active"));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!validateEmail(formData.email)) newErrors.email = true;
    if (!formData.subject.trim()) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      showToast && showToast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error("Error saving message:", err);
      setIsSubmitting(false);
      showToast && showToast("Failed to send message. Try again later.", "error");
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="section-header reveal">
        <p className="section-subtitle">Let&apos;s Connect</p>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info reveal-left">
          <h3>
            Let&apos;s build something <span>amazing</span> together!
          </h3>
          <p>Have a project in mind? Feel free to reach out. I&apos;m always open to new opportunities.</p>

          <div className="contact-links">
            <a href="mailto:sahrajakumar885@gmail.com" className="contact-link">
              <div className="contact-link-icon">📧</div>
              <span>sahrajakumar885@gmail.com</span>
            </a>

            <a href="https://kiithub.in" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div className="contact-link-icon">🌐</div>
              <span>kiithub.in</span>
            </a>

            <a
              href="https://maps.google.com/?q=KIIT+University,+Bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">📍</div>
              <span>KIIT University, Bhubaneswar, Odisha</span>
            </a>
          </div>
        </div>

        <form className="contact-form reveal-right" onSubmit={handleSubmit}>
          <div className="form-header">
            <h4>Send me a message</h4>
            <p>I&apos;ll get back to you soon</p>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Raja Kumar Sah"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                autoComplete="name"
              />
              <p className={`error-message ${errors.name ? "show" : ""}`}>Please enter your name</p>
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="sahrajakumar885@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                autoComplete="email"
              />
              <p className={`error-message ${errors.email ? "show" : ""}`}>Please enter a valid email</p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project Inquiry"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
            />
            <p className={`error-message ${errors.subject ? "show" : ""}`}>Please enter a subject</p>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
              rows={5}
            />
            <p className={`error-message ${errors.message ? "show" : ""}`}>Please enter your message</p>
          </div>

          <button type="submit" className={`submit-btn ${submitSuccess ? "success" : ""}`} disabled={isSubmitting}>
            <span>{isSubmitting ? "Sending..." : submitSuccess ? "Message Sent!" : "Send Message"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
