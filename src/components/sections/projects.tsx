'use client';

import ProjectCard from '@/components/shared/project-card';
import type { Project } from '@/lib/types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex sales data, built with React and D3.js. Features real-time data updates and customizable charts.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Dashboard',
    tags: ['React', 'D3.js', 'Node.js', 'Dashboard'],
    category: 'Data Science',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'data dashboard',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and Stripe integration for payments. Built with Next.js and MongoDB.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=E-commerce',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'E-commerce'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'online shopping',
  },
  {
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management. Built with React Native and Firebase, it allows users to organize tasks, set reminders, and collaborate.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Mobile+App',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    category: 'App Development',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'mobile app interface',
  },
  {
    title: 'Predictive Analytics Model',
    description: 'A machine learning model to predict customer churn using Python, Scikit-learn, and Pandas. Deployed as a REST API with Flask.',
    image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Analytics',
    tags: ['Python', 'Scikit-learn', 'Flask', 'API'],
    category: 'Data Science',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'analytics graph',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">PROJECTS</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A selection of my recent work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
