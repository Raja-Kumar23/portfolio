"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonials = [
    {
      text: '"Raja is an exceptional developer with a keen eye for detail and a passion for creating elegant solutions. His work exceeded expectations."',
      author: "Prof. Amit Kumar, KIIT University",
    },
    {
      text: '"Working with Raja was a pleasure. He brings creativity and technical expertise to every project. Highly recommended!"',
      author: "Priya Sharma, Project Lead",
    },
    {
      text: '"Raja\'s problem-solving skills and dedication to learning make him a valuable team member."',
      author: "Rahul Verma, Senior Developer",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-accent-purple/8 to-bg-card/50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center gradient-text">Testimonials</h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-effect p-12 rounded-xl text-center" style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <p className="text-text-secondary text-xl mb-6 italic leading-relaxed">{testimonials[current].text}</p>
            <p className="text-primary font-bold">{testimonials[current].author}</p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-bg-dark transition-all"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-bg-dark transition-all"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
