import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-violet-50 to-blue-50 dark:from-background dark:via-violet-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="block">Hi, I'm Alex Doe</span>
              <span className="block bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Creative Developer & Data Scientist
              </span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
              I build beautiful, responsive, and data-driven applications. From crafting intuitive user interfaces to developing complex machine learning models, I love bringing ideas to life with code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
             <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
            <div className="relative aspect-square">
               <Image
                src="https://placehold.co/600x600.png"
                alt="Alex Doe"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
