import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Report an Issue?</h2>
          <p>Join our community of citizens working together to keep the Circus of Wonders thriving. Your reports help us maintain our mobile city and ensure everyone enjoys the show.</p>
          <div className="cta-buttons">
            <Link to="/submit-complaint" className="btn">Get Started Now</Link>
            <a href="#" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA;