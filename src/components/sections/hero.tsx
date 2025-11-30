'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40" />

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
              className="rounded-full object-cover border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          ADIEL RUM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
        >
          App Developer & Data Scientist. <br className="hidden md:block" />
          Crafting digital experiences with precision and intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-8 text-lg group">
            <a href="#projects">
              View Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white hover:text-black rounded-full px-8 text-lg">
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
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
