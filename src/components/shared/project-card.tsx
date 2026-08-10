'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, tags, liveUrl, githubUrl, category, dataAiHint } = project;

  return (
    <Card className="overflow-hidden h-full flex flex-col bg-[#FAF8F5] border border-[#E2D8CC] group hover:border-[#C88A42]/50 shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-60 overflow-hidden bg-[#EFE8DE]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={dataAiHint}
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-[#F6F2EC]/90 backdrop-blur-md text-[#241E1A] border border-[#E2D8CC] font-medium">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-6 pb-2">
          <CardTitle className="text-xl font-bold text-[#241E1A] group-hover:text-[#C88A42] transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-2">
        <p className="text-[#63574D] text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-[#E2D8CC] text-[#63574D] bg-[#EFE8DE]/60 text-xs font-normal">
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
            className="text-[#63574D] hover:text-[#241E1A] transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
        {liveUrl && (
          <Button variant="outline" size="sm" className="ml-auto border-[#E2D8CC] text-[#241E1A] bg-[#FAF8F5] hover:bg-[#241E1A] hover:text-[#FAF8F5] transition-colors gap-2" asChild>
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
