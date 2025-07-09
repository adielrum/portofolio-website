import ProjectCard from '@/components/shared/project-card';
import type { Project } from '@/lib/types';

const projects: Project[] = [
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex sales data, built with React and D3.js. Features real-time data updates and customizable charts.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Node.js', 'Dashboard'],
    category: 'Data Science',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'data dashboard',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and Stripe integration for payments. Built with Next.js and MongoDB.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'MongoDB', 'Stripe', 'E-commerce'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'online shopping',
  },
  {
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management. Built with React Native and Firebase, it allows users to organize tasks, set reminders, and collaborate.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    category: 'App Development',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'mobile app interface',
  },
  {
    title: 'Predictive Analytics Model',
    description: 'A machine learning model to predict customer churn using Python, Scikit-learn, and Pandas. Deployed as a REST API with Flask.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Scikit-learn', 'Flask', 'API'],
    category: 'Data Science',
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'analytics graph',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text inline-block">My Creations</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Here are some of the projects I'm proud of. They showcase my skills across data science, web, and app development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
