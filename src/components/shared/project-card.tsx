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
  
  const categoryColors = {
    'Data Science': 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    'Web Development': 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
    'App Development': 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
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
          <Badge className={`mb-2 font-semibold ${categoryColors[category]}`}>{category}</Badge>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end gap-2">
        {liveUrl && (
          <Button variant="outline" asChild>
            <Link href={liveUrl} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild>
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
