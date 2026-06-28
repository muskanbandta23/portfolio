import { FiExternalLink } from 'react-icons/fi'

const Achievements = () => {
  const featured = [
    {
      badge: '🎤',
      title: 'Bengaluru Tech Summit 2025',
      description: 'Represented zopnight by ZopDev at Bengaluru Tech Summit 2025, showcasing cloud solutions and engaging with the tech community.',
      link: 'https://www.linkedin.com/posts/muskan-bandta2004_bengalurutechsummit2025-cloud-finops-activity-7398067320901890048-D33w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlsv_MBgypIci3sQ2e97iLLmelbF2UQ_fc',
      tag: 'Company Representative',
      bg: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=70'
    },
    {
      badge: '🤖',
      title: 'India Digital Summit 2026 — AI Zone',
      description: 'Represented ZopDev at India Digital Summit 2026 in the AI Zone, exploring cutting-edge AI and cloud technologies.',
      link: 'https://www.linkedin.com/posts/muskan-bandta2004_indiadigitalsummit-ids2026-aizone-activity-7423408831151640576-LkTi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlsv_MBgypIci3sQ2e97iLLmelbF2UQ_fc',
      tag: 'AI & Cloud',
      bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=70'
    },
    {
      badge: '🏛️',
      title: 'ZopDev × Presto Meetup @ IBM EGL Bengaluru',
      description: 'Conducted the ZopDev × Presto Foundation meetup in collaboration with IBM, on Agentic AI, Data Platforms and CloudOps at production scale.',
      link: 'https://www.linkedin.com/posts/muskan-bandta2004_agenticai-platformengineering-cloudops-ugcPost-7466910155142578176-JsGE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlsv_MBgypIci3sQ2e97iLLmelbF2UQ_fc',
      tag: 'Meetup',
      bg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=70'
    }
  ]

  const compact = [
    {
      badge: '💻',
      title: 'Codeless Blockchain Hackathon',
      description: 'Participated with Joget, exploring no-code blockchain solutions.',
      date: 'Feb 2023'
    },
    {
      badge: '⚡',
      title: "Phosphenes' Code War — Trade",
      description: 'Applied programming and financial skills in a competitive environment.',
      date: 'Mar 2023'
    }
  ]

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <h2 className="section-title h-mega">Achievements &amp; Events</h2>

        <h3 className="ach-group-label">Work &amp; Industry Events</h3>
        <div className="achievements-featured">
          {featured.map((item, index) => (
            <div className="achievement-featured-card" key={index}>
              <span className="achievement-featured-badge">{item.badge}</span>
              <div className="achievement-featured-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-featured-link">
                    View on LinkedIn <FiExternalLink size={14} />
                  </a>
                )}
              </div>
              <span className="achievement-tag achievement-featured-tag">{item.tag}</span>
            </div>
          ))}
        </div>

        <h3 className="ach-group-label ach-group-label-mt">Academic &amp; Hackathons</h3>
        <div className="achievements-compact">
          {compact.map((item, index) => (
            <div className="achievement-compact-card" key={index}>
              <span className="achievement-compact-badge">{item.badge}</span>
              <div className="achievement-compact-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <span className="achievement-compact-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
