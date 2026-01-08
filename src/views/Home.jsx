import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import TrailerGallery from '../components/TrailerGallery'

function Home() {
  return (
    <div>
      <Navbar />
        <HeroSection />
        <FeatureSection />
        <TrailerGallery />
      <Footer />
    </div>
  )
}

export default Home