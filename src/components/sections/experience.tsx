import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

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
    image: 'https://placehold.co/150x150.png',
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
    image: 'https://placehold.co/150x150.png',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text inline-block">My Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            My professional journey and contributions.
          </p>
        </div>
        <div className="space-y-12">
          {experience.map((item, index) => (
            <Card key={index} className="grid md:grid-cols-4 gap-8 p-6">
              <div className="md:col-span-1">
                <Image
                  src={item.image}
                  alt={`${item.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-full mb-4 object-cover"
                />
                <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                <p className="text-gray-300">{item.company}</p>
                <p className="text-gray-400 text-sm">{item.duration}</p>
              </div>
              <CardContent className="md:col-span-3 space-y-4 p-0">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-white/10 backdrop-blur-sm border-none text-gray-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
