import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { title, description, image, date, slug, dataAiHint } = post;

  return (
    <Card className="overflow-hidden h-full flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={slug} className="block relative w-full h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            data-ai-hint={dataAiHint}
          />
        </Link>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <CardTitle className="text-xl font-bold">
            <Link href={slug} className="hover:text-primary transition-colors">{title}</Link>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="link" className="p-0 h-auto" asChild>
          <Link href={slug}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
