'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  image: string,
}

const experience: ExperienceItem[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
      'Implemented RESTful APIs and integrated third-party services.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS'],
    image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=TS',
  },
  {
    title: 'Data Scientist',
    company: 'Data Insights Co.',
    duration: 'Jul 2019 - Dec 2021',
    description: [
      'Built and deployed machine learning models for predictive analytics.',
      'Performed data cleaning, analysis, and visualization using Python and R.',
      'Developed dashboards to present key insights to stakeholders.',
    ],
    technologies: ['Python', 'R', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Tableau'],
    image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=DI',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">EXPERIENCE</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            My professional journey and contributions.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical Line for Timeline (Desktop) */}
          <div className="hidden md:block absolute left-[28px] top-4 bottom-4 w-[1px] bg-white/20" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative pl-0 md:pl-20">
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-14 h-14 items-center justify-center bg-black border border-white/20 rounded-full z-10">
                  <Image
                    src={item.image}
                    alt={`${item.company} logo`}
                    width={30}
                    height={30}
                    className="rounded-full object-cover grayscale"
                  />
                </div>

                <Card className="bg-black border border-white/10 hover:border-white/30 transition-colors duration-300">
                  <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                    <div className="flex items-center gap-4 md:gap-0">
                      <Image
                        src={item.image}
                        alt={`${item.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover grayscale md:hidden"
                      />
                      <div>
                        <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                        <p className="text-gray-400 font-medium">{item.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-white/20 text-gray-400 rounded-full px-4 py-1">
                      {item.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-base leading-relaxed pl-2 -indent-2">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-white/5 hover:bg-white/10 text-gray-300 border-none rounded-md px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
