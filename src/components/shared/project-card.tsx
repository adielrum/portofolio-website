import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Github } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, tags, liveUrl, githubUrl, category, dataAiHint } = project;
  
  const categoryGradients = {
    'Data Science': 'from-blue-500 to-blue-300',
    'Web Development': 'from-purple-500 to-purple-300',
    'App Development': 'from-red-500 to-red-300',
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative w-full h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            data-ai-hint={dataAiHint}
          />
        </div>
        <div className="p-6">
          <Badge className={`mb-2 font-semibold bg-gradient-to-br ${categoryGradients[category]} text-white border-none`}>{category}</Badge>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-white/10 backdrop-blur-sm border-none text-gray-200">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end gap-2">
        {liveUrl && (
          <Button variant="ghost" className="border-2 border-white hover:bg-white/10 hover:text-white" asChild>
            <Link href={liveUrl} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white" asChild>
            <Link href={githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
