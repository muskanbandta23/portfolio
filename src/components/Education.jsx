import { FiBookOpen } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      institution: 'Chitkara Institute of Engineering & Technology',
      degree: 'B.E. Computer Science',
      period: '2022 — 2026'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class XII',
      period: '2022'
    },
    {
      institution: 'DAV Public School, New Shimla',
      degree: 'CBSE Class X',
      period: '2020'
    }
  ]

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title h-mega">Education</h2>
        <div className="edu-grid">
          {education.map((edu, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-card-top">
                <span className="edu-card-icon">
                  <FiBookOpen size={16} />
                </span>
                <span className="edu-card-period">{edu.period}</span>
              </div>
              <h3 className="edu-card-degree">{edu.degree}</h3>
              <p className="edu-card-school">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
