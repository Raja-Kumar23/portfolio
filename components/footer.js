"use client"

export default function Footer() {
  return (
    <footer className="bg-bg-darker/90 border-t border-primary/15 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-text-secondary">© 2025 Raja Kumar. All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#home" className="text-text-secondary hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-text-secondary hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-text-secondary hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-text-secondary hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
