import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl tracking-tighter text-white mb-2">
            ADIEL RUM
          </span>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-white/10">
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-white/10">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-white/10">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
