import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFE8DE] border-t border-[#E2D8CC] py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-xl tracking-tighter text-[#241E1A] mb-2">
            ADIEL RUM
          </span>
          <p className="text-sm text-[#63574D]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="text-[#63574D] hover:text-[#241E1A] hover:bg-[#E2D8CC]/50">
            <Link href="https://github.com/adielrum" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-[#63574D] hover:text-[#241E1A] hover:bg-[#E2D8CC]/50">
            <Link href="https://www.linkedin.com/in/adielrum/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
