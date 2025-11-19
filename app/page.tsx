'use client'

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LocationsSection from './components/LocationsSection'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <LocationsSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
