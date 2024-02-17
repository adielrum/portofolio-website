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
        <Skills />
        <Projects />
      </main>
        <Footer />
    </div>
  )
}

export default Home