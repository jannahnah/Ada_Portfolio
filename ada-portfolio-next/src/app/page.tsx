"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔑 Sync theme with HTML attribute
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      {/* ================= HEADER / NAV ================= */}
      <header className="site-header">
        <nav className="nav">
          <div className="logo">
            <span>Jannah Ada</span>
          </div>

          {/* NAV TOGGLE */}
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* NAV LINKS */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          {/* THEME TOGGLE */}
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="hero-content">
            <h1>Jannah Loraine L. Ada</h1>

            <p className="hero-role">UI/UX Enthusiast</p>

            <p className="hero-description">
              I design intuitive and user-centered interfaces with a focus on
              clarity, accessibility, and long-term usability.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
              <a href="#about" className="btn outline">About Me</a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src="/profile.jpg"
                alt="Portrait of Jannah Loraine Ada"
              />
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="services">
          <h2>What I Do</h2>

          <div className="services-grid">
            <article className="service-card">
              <h3>UI Design</h3>
              <p>
                I create clean and visually balanced user interfaces that prioritize
                clarity, consistency, and ease of navigation.
              </p>
            </article>

            <article className="service-card">
              <h3>UX Thinking</h3>
              <p>
                I focus on user-centered design by understanding user needs,
                mapping user flows, and reducing friction in digital experiences.
              </p>
            </article>

            <article className="service-card">
              <h3>System-Oriented Design</h3>
              <p>
                I design interfaces with scalability in mind, ensuring they remain usable
                even as systems grow or tools evolve.
              </p>
            </article>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>3</h3>
              <p>Years of Experience</p>
            </div>

            <div className="stat-item">
              <h3>10+</h3>
              <p>Technologies Used</p>
            </div>

            <div className="stat-item">
              <h3>CDMP</h3>
              <p>Certification</p>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="projects">
          <h2>Featured Projects</h2>

          <div className="projects-grid">
            <article className="project-card">
              <h3>Pawsitivity (Web Design)</h3>
              <p>
                A web-based project that spreads awareness about adopting
                and showing compassion for stray animals.
              </p>
              <span className="tech-stack">
                Figma (Low-Fidelity Design), Google Slides (Final Output)
              </span>
            </article>

            <article className="project-card">
              <h3>POS System (Admin / Cashier Database System)</h3>
              <p>
                A simple CRUD-based database system designed to manage
                products, users, and transactions efficiently.
              </p>
              <span className="tech-stack">
                VB.NET, MySQL, Python, VS Code
              </span>
            </article>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I am an IT student and UI/UX enthusiast with experience in designing
            user-friendly systems and interfaces. I value strong fundamentals,
            thoughtful design decisions, and continuous learning.
          </p>
        </section>

        {/* ================= QUOTE ================= */}
        <section className="quote">
          <blockquote>
            “I build systems with the assumption that tools will change,
            but fundamentals—clarity, security, and usability—should not.”
          </blockquote>
        </section>

        {/* ================= FOOTER / CONTACT ================= */}
        <footer id="contact" className="contact">
          <h2>Get in Touch</h2>
          
          <div className="contact-form">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              const form = e.currentTarget;
              const formData = new FormData(form);
            
            try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                  }),
                });

                if (res.ok) {
                  alert("Message sent!");
                  form.reset();
                } else {
                  alert("Failed to send message.");
                }
              } catch (err) {
                alert("An error occurred. Please try again.");
              } finally {
                // 3. Stop loading regardless of success or failure
                setIsSubmitting(false);
              }
            }}
          >
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

          <div className="footer-info">
            <p>
              Email: <a href="mailto:jannahsnow13@gmail.com">jannahsnow13@gmail.com</a>
            </p>

            <div className="social-links">
              <a href="https://github.com/jannahnah" target="_blank">GitHub</a>
              <a href="https://www.facebook.com/jannahsnow13" target="_blank">Facebook</a>
            </div>

            <p className="copyright">
              © 2026 Jannah Loraine Ada
            </p>
          </div>
        </footer>

      </>
    );
}
