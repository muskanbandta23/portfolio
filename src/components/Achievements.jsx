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

  const press = [
    {
      badge: '📰',
      title: 'JetBrains seeks to unify fragmented AI-based software development',
      description: 'Quoted in InfoWorld as cloud associate at ZopDev, on the fragmentation of AI coding tools becoming a governance and cost problem for enterprises.',
      outlet: 'InfoWorld',
      link: 'https://www.infoworld.com/article/4195002/jetbrains-seeks-to-unify-fragmented-ai-based-software-development-with-governance-suite.html'
    },
    {
      badge: '📰',
      title: 'Model Context Protocol is going stateless to make scaling simpler',
      description: 'Quoted in CIO as cloud associate at ZopDev, on MCP\'s move to stateless architecture: "the session-based model made sense when MCP servers were local processes — in production, it became an operational tax."',
      outlet: 'CIO',
      link: 'https://www.cio.com/article/4201258/model-context-protocol-is-going-stateless-to-make-scaling-simpler-2.html'
    },
    {
      badge: '📰',
      title: 'Meta launches low-cost Muse Spark 1.1 amid enterprise AI spending scrutiny',
      description: 'Quoted in Computerworld on enterprise AI adoption — price is one input in total cost of ownership, alongside risk, control and switching cost.',
      outlet: 'Computerworld',
      link: 'https://www.computerworld.com/article/4195528/meta-launches-low-cost-muse-spark-1-1-as-enterprise-ai-spending-comes-under-scrutiny-2.html'
    },
    {
      badge: '📰',
      title: "OpenAI's Codex context reduction for GPT-5.6 sparks dissatisfaction",
      description: 'Quoted in InfoWorld as cloud associate at ZopDev, on developer reaction to context-window reductions in AI coding tools.',
      outlet: 'InfoWorld',
      link: 'https://www.infoworld.com/article/4198811/openais-codex-context-reduction-for-gpt-5-6-sparks-dissatisfaction-among-developers.html'
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

        <h3 className="ach-group-label ach-group-label-mt">Mentions in the Tech World</h3>
        <div className="achievements-compact">
          {press.map((item, index) => (
            <div className="achievement-compact-card" key={index}>
              <span className="achievement-compact-badge">{item.badge}</span>
              <div className="achievement-compact-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-featured-link">
                  Read on {item.outlet} <FiExternalLink size={14} />
                </a>
              </div>
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
