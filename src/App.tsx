import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OnlineCoaching from './components/OnlineCoaching'
import About from './components/About'
import Transformations from './components/Transformations'
import VideoTestimonial from './components/VideoTestimonial'
import VideoTestimonial2 from './components/VideoTestimonial2'
import Services from './components/Services'
import Plans from './components/Plans'
import Methodology from './components/Methodology'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <OnlineCoaching />
        <About />
        <Transformations />
        <VideoTestimonial />
        <VideoTestimonial2 />
        <Services />
        <Plans />
        <Methodology />
        <Certifications />
        <Contact />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
