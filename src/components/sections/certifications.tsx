'use client';

import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

import { certifications } from "@/data";
import type { Certification } from "@/lib/types";


export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollArrows = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      setShowRightArrow(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + scrollRef.current.scrollLeft + 1);
    }
  };

  useEffect(() => {
    checkScrollArrows();
    const handleResize = () => checkScrollArrows();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">CERTIFICATIONS</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Professional validations of my technical expertise.
          </p>
        </motion.div>

        <div className="relative group">
          {showLeftArrow && (
            <Button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white border border-white/20 rounded-full h-12 w-12 hidden md:flex"
              size="icon"
              onClick={() => scroll(-300)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          <div
            className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar snap-x snap-mandatory"
            ref={scrollRef}
            onScroll={checkScrollArrows}
          >
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                className="flex-none w-[85vw] md:w-[400px] snap-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <CertificationCard certification={certification} />
              </motion.div>
            ))}
          </div>

          {showRightArrow && (
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white border border-white/20 rounded-full h-12 w-12 hidden md:flex"
              size="icon"
              onClick={() => scroll(300)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Card className="relative h-full bg-black border border-white/10 hover:border-white/30 transition-all duration-300 group/card overflow-hidden">
      <div className="p-8 flex flex-col items-center text-center h-full">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full transform group-hover/card:scale-110 transition-transform duration-500" />
          <Image
            src={certification.image}
            alt={certification.title}
            width={80}
            height={80}
            className="relative rounded-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 border border-white/10"
          />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-gray-200 transition-colors">
          {certification.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 font-medium tracking-wide uppercase">
          {certification.issuer}
        </p>

        <div className="mt-auto space-y-4 w-full flex flex-col items-center">
          <Badge variant="outline" className="border-white/20 text-gray-400 font-normal">
            {certification.date}
          </Badge>

          <Link
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors border-b border-transparent hover:border-white pb-0.5"
          >
            View Certificate <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
