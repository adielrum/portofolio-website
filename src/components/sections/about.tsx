import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const skills = {
  'Languages': ['Python', 'JavaScript/TypeScript', 'SQL', 'R', 'Java'],
  'Web Development': ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'HTML5', 'CSS3'],
  'Data Science': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
  'Tools': ['Git', 'Docker', 'Jupyter', 'VS Code', 'Google Cloud Platform'],
};

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-full h-auto aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/400x500.png"
                alt="About me"
                fill
                className="object-cover"
                data-ai-hint="person working computer"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
              <p className="text-gray-300 text-lg">
                I am a passionate and results-driven professional with a dual focus in web/app development and data science. My journey in technology started with a fascination for how data can tell stories and how code can build worlds. Today, I channel that passion into creating elegant, efficient, and impactful digital solutions.
              </p>
              <p className="text-gray-300 text-lg">
                Whether I'm architecting a full-stack application, training a neural network, or visualizing complex datasets, I bring a commitment to quality and a user-centric mindset. I thrive in collaborative environments and am always eager to learn new technologies and tackle challenging problems.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text inline-block">My Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-lg mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} className="bg-gradient-to-br from-white/20 to-white/10 border-white/20 border text-white backdrop-blur-sm px-3 py-1 text-sm font-medium">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
