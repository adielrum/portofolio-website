'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { skills } from '@/data';


export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden border border-white/20">
              <Image
                src="https://placehold.co/400x500/1a1a1a/ffffff.png?text=About+Me"
                alt="About me"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">ABOUT ME</h2>
              <div className="w-20 h-1 bg-white" />
              <p className="text-gray-400 text-lg leading-relaxed">
                I am a passionate and results-driven professional with a dual focus in web/app development and data science. My journey in technology started with a fascination for how data can tell stories and how code can build worlds. Today, I channel that passion into creating elegant, efficient, and impactful digital solutions.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether I'm architecting a full-stack application, training a neural network, or visualizing complex datasets, I bring a commitment to quality and a user-centric mindset. I thrive in collaborative environments and am always eager to learn new technologies and tackle challenging problems.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">MY SKILLS</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <h4 className="font-semibold text-white mb-3 uppercase tracking-wider text-sm">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-white/20 text-gray-300 hover:text-white hover:border-white transition-colors py-1 px-3 text-sm font-normal rounded-full"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
