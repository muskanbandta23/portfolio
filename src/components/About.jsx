import profileImg from '../assets/profile.jpeg'

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title h-mega">About <span className="hl-block">Myself</span></h2>
        <div className="about-layout about-layout-flip">
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm <strong>Muskan</strong>, a Computer Science Engineering graduate from
                Chitkara University, Punjab. Driven to design scalable digital solutions and
                solve real-world technical problems, with hands-on experience in programming
                languages like <strong>Java</strong> and familiar with basic data structures in
                C++, frontend development and cloud computing.
              </p>
              <p>
                I have also worked on and have hands-on experience in <strong>AI Automation</strong>,
                orchestrating existing AI models and automation software to streamline business
                workflows so teams can move faster with less manual lift. I've contributed across
                AI/ML, SQL, DBMS and Computer Networks, and I'm an effective communicator with both
                technical and non-technical stakeholders.
              </p>
              <p>
                Currently, I'm working as a <strong>Cloud Associate at ZopDev</strong>,
                developing my expertise in cloud computing and SaaS development, working on{' '}
                <strong>cloud infrastructure</strong> and <strong>AI-driven automations</strong>.
              </p>
            </div>
          </div>
          <div className="about-side">
            <div className="about-frame about-frame-round">
              <img src={profileImg} alt="Muskan Bandta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
