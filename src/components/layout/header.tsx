'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#F6F2EC]/85 backdrop-blur-md border-b border-[#E2D8CC] shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-xl tracking-tighter text-[#241E1A] group-hover:text-[#63574D] transition-colors">
            ADIEL RUM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#63574D] hover:text-[#241E1A] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#241E1A] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="text-[#63574D] hover:text-[#241E1A] hover:bg-[#EFE8DE]">
            <a href="https://github.com/adielrum" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-[#63574D] hover:text-[#241E1A] hover:bg-[#EFE8DE]">
            <a href="https://www.linkedin.com/in/adielrum/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" className="border-[#E2D8CC] text-[#241E1A] hover:bg-[#241E1A] hover:text-[#FAF8F5] transition-all rounded-full px-6 bg-[#FAF8F5]">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#241E1A] hover:bg-[#EFE8DE]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-[#F6F2EC] border-l border-[#E2D8CC] p-0">
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-xl tracking-tighter text-[#241E1A]">
                    MENU
                  </span>
                </div>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-3xl font-light text-[#63574D] hover:text-[#241E1A] transition-colors block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-[#241E1A] text-[#FAF8F5] hover:bg-[#3D332D] rounded-full py-6 text-lg">
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
