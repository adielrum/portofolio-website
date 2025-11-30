'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, tags, liveUrl, githubUrl, category, dataAiHint } = project;

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-black border border-white/10 group hover:border-white/30 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            data-ai-hint={dataAiHint}
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-black/50 backdrop-blur-md text-white border border-white/20 hover:bg-black/70">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-6 pb-2">
          <CardTitle className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-white/10 text-gray-400 text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center gap-4">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        {liveUrl && (
          <Button variant="outline" size="sm" className="ml-auto border-white/20 text-white hover:bg-white hover:text-black transition-colors gap-2" asChild>
            <Link href={liveUrl} target="_blank">
              Live Demo
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
