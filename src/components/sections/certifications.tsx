'use client';

import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'October 2023',
    image: 'https://placehold.co/150x150.png',
    link: '#',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'September 2023',
    image: 'https://placehold.co/150x150.png',
    link: '#',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'August 2023',
    image: 'https://placehold.co/150x150.png',
    link: '#',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'August 2023',
    image: 'https://placehold.co/150x150.png',
    link: '#',
  },
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'August 2023',
    image: 'https://placehold.co/150x150.png',
    link: '#',
  },
];

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollArrows = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      setShowRightArrow(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + scrollRef.current.scrollLeft);
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
    <section id="certifications" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text inline-block">My Certifications</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            A collection of my professional certifications.
          </p>
        </div>
        <div className="relative">
          {showLeftArrow && (
            <Button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white"
              size="icon"
              onClick={() => scroll(-300)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}
          <div
            className="flex overflow-x-auto space-x-8 pb-4 hide-scrollbar"
            ref={scrollRef}
            onScroll={checkScrollArrows}
          >
            {certifications.map((certification, index) => (
              <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3">
                <CertificationCard certification={certification} />
              </div>
            ))}
          </div>
          {showRightArrow && (
            <Button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white"
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
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-white/10 border border-white/20">
      <Link href={certification.link} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Certification</span>
      </Link>
      <div className="p-6 flex flex-col items-center text-center">
        <Image
          src={certification.image}
          alt={certification.title}
          width={100}
          height={100}
          className="rounded-full mb-4 object-cover"
        />
        <h3 className="text-xl font-bold text-white mb-2">{certification.title}</h3>
        <p className="text-gray-300 text-sm mb-1">I{certification.issuer}</p>
        <Badge className="bg-gradient-to-br from-white/20 to-white/10 border-white/20 border text-white backdrop-blur-sm px-3 py-1 text-xs font-medium">
          {certification.date}
        </Badge>
        <Link href={certification.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-300 hover:text-blue-200 flex items-center">
          View Certificate <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
