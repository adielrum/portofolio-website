'use client';

import { useState } from 'react';
import ProjectCard from '@/components/shared/project-card';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data';

const categories = ['All', 'Web Dev', 'Data Science & Math', 'Algorithms & Optimization'] as const;
type Category = (typeof categories)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="w-full py-20 bg-[#F6F2EC] text-[#241E1A] border-t border-[#E2D8CC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#241E1A]">PROJECTS</h2>
          <p className="max-w-2xl mx-auto text-[#63574D] text-lg">
            Explore my work across software engineering, algorithms & optimization, and data science.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#FAF8F5] font-semibold'
                    : 'text-[#63574D] hover:text-[#241E1A] bg-[#EFE8DE] hover:bg-[#E2D8CC]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#241E1A] rounded-full -z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
