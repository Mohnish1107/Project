import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '📝',
      title: 'Complaint Submission',
      description: 'Report issues with text, location details, and photo evidence for faster resolution.'
    },
    {
      icon: '📊',
      title: 'Municipal Dashboard',
      description: 'Staff can view, assign, and update complaints with an intuitive interface.'
    },
    {
      icon: '🔍',
      title: 'Search & Filtering',
      description: 'Find complaints by type, area, urgency, or date with powerful search tools.'
    },
    {
      icon: '👥',
      title: 'Role-Based Access',
      description: 'Different dashboards for citizens, staff, and administrators with appropriate permissions.'
    },
    {
      icon: '🗺️',
      title: 'Heatmap Visualization',
      description: 'Interactive map showing complaint density by location for better resource allocation.'
    },
    {
      icon: '⏱️',
      title: 'SLA Tracking',
      description: 'Monitor how long issues remain unresolved and highlight overdue complaints.'
    }
  ]

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <h2>Key Features</h2>
          <p>Everything you need to keep our traveling city running smoothly</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;