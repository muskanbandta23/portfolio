import { FiMail, FiSend } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const RECIPIENT = 'muskanbandta1@gmail.com'

const Contact = () => {
  const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent("Hello Muskan 👋")}&body=${encodeURIComponent("Hi Muskan,\n\n")}`

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <p className="contact-tagline">Have something in mind?</p>
          <h2 className="contact-title contact-title-center">
            Let's Build Something<br />
            <span className="contact-title-accent">Amazing Together</span>
          </h2>
        </div>

        <div className="contact-cta-wrap">
          <a href={mailto} className="contact-cta-btn">
            <FiSend size={20} />
            <span>Send Message</span>
            <span className="contact-cta-emoji">✉️</span>
          </a>
        </div>

        <div className="contact-quick-links">
          <span className="contact-quick-label">or reach out directly</span>
          <div className="contact-socials">
            <a
              href="mailto:muskanbandta1@gmail.com"
              className="contact-social"
              aria-label="Email"
              data-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/muskan-bandta2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="LinkedIn"
              data-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/muskanbandta23"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="GitHub"
              data-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
