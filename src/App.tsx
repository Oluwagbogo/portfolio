import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import VenueMarquee from './components/VenueMarquee'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <VenueMarquee />
      <About />
      <Skills />
      <Publications />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
