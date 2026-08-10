'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#F6F2EC] overflow-hidden pt-20 border-b border-[#E2D8CC]">
      {/* Warm Ambient Background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FAF8F5] via-[#F6F2EC] to-[#EFE8DE] opacity-80" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
            <Image
              src="/profile.jpg"
              alt="Adiel Rum"
              fill
              className="rounded-full object-cover border-2 border-[#E2D8CC] shadow-md transition-all duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#241E1A] mb-6"
        >
          ADIEL RUM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#63574D] max-w-2xl mx-auto mb-10 font-light"
        >
          Mathematics & Computer Science at ITB (GPA 3.96/4.0). <br className="hidden md:block" />
          Data Analyst, ML Researcher & Software Developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild className="bg-[#241E1A] text-[#FAF8F5] hover:bg-[#3D332D] rounded-full px-8 text-lg group shadow-md">
            <a href="#projects">
              View Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-[#E2D8CC] text-[#241E1A] bg-[#FAF8F5] hover:bg-[#241E1A] hover:text-[#FAF8F5] rounded-full px-8 text-lg transition-all">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#241E1A] to-transparent opacity-30" />
      </motion.div>
    </section>
  );
}
