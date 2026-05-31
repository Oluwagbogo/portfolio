import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import VenueMarquee from './components/VenueMarquee'
import WaveDivider from './components/WaveDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-950 font-sans">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <VenueMarquee />
      <About />
      <WaveDivider variant="white-to-cream" />
      <Journey />
      <WaveDivider variant="cream-to-white" />
      <Skills />
      <WaveDivider variant="white-to-cream" />
      <Publications />
      <WaveDivider variant="cream-to-white" />
      <Projects />
      <WaveDivider variant="white-to-cream" />
      <Experience />
      <WaveDivider variant="any-to-ink" />
      <Contact />
      <Footer />
    </div>
  )
}
