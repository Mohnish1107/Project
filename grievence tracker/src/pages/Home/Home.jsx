import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Stats from '../components/Stats'
import Link from "react-router-dom"
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
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
    </>
  )
}

export default Home