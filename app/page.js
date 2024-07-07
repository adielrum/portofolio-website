import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-12">
        <Hero />
        <div id="skills-section">
          <Skills />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home