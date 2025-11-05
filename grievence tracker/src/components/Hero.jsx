import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h2>Welcome to the Circus of Wonders Grievance Tracker</h2>
        <p>Your mobile city deserves to run as smoothly as the show itself. Report issues, track resolutions, and help keep our traveling community thriving.</p>
        <div className="hero-buttons">
          <Link to="/submit-complaint" className="btn">Report an Issue</Link>
          <a href="#" className="btn btn-secondary">Track a Complaint</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;