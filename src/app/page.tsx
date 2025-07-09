import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import AiAdvisor from '@/components/shared/ai-advisor';
import Chatbox from '@/components/sections/chatbox';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] dark:from-[#1a1a2e] dark:to-[#16213e] text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Chatbox />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <AiAdvisor />
      <Footer />
    </div>
  );
}
