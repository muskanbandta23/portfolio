import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import heroPhoto from '../assets/hero-photo.png'

const ROLES = [
  'AI Automation Engineer',
  'Cloud Engineer',
]

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setShow(true)
      }, 350)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-layout">
        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <img src={heroPhoto} alt="Muskan Bandta" />
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-name hero-name-bold">Muskan Bandta</h1>
          <div className="roles-loop">
            <span className={`role-pill ${show ? 'show' : ''}`}>{ROLES[roleIdx]}</span>
          </div>
          <p className="hero-description">
            Driven to create intelligent, and scalable systems at the intersection of cloud and
            frontend development. With hands-on experience in programming, AI, and SaaS
            environments. Having a deep interest in the evolving AI landscape and its impact
            on product innovation and modern system architecture.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <a href="#projects" className="btn btn-ghost">See Work</a>
          </div>
          <div className="hero-socials">
            <a href="https://linkedin.com/in/muskan-bandta2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/muskanbandta23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="mailto:muskanbandta1@gmail.com" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
          <a href="#about" className="hero-scroll">
            <FiArrowDown size={18} />
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
      <div className="hero-marquee">
        <div className="marquee-track">
          <span>AI Automation</span><span>LLM Orchestration</span><span>Cloud Engineering</span>
          <span>Frontend Development</span><span>SaaS</span><span>Workflow Automation</span>
          <span>FinOps</span><span>UI / UX</span>
          <span>AI Automation</span><span>LLM Orchestration</span><span>Cloud Engineering</span>
          <span>Frontend Development</span><span>SaaS</span><span>Workflow Automation</span>
          <span>FinOps</span><span>UI / UX</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
