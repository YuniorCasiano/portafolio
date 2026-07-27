import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import CV from '../components/CV'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <CV />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
