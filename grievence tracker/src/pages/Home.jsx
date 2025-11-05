import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
    </>
  )
}

export default Home