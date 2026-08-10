'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { skills } from '@/data';

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-[#EFE8DE] text-[#241E1A] border-t border-[#E2D8CC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden border border-[#E2D8CC] shadow-md">
              <Image
                src="https://placehold.co/400x500/FAF8F5/241E1A.png?text=About+Me"
                alt="About me"
                fill
                className="object-cover transition-all duration-500 hover:scale-105"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#E2D8CC] -z-10 bg-[#FAF8F5]/50" />
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
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#241E1A]">ABOUT ME</h2>
              <div className="w-20 h-1 bg-[#241E1A]" />
              <p className="text-[#63574D] text-lg leading-relaxed">
                I am an undergraduate student in Mathematics with a minor in Computer Science at Institut Teknologi Bandung (ITB) holding a cumulative GPA of 3.96/4.0 and 5 consecutive Dean's List honors.
              </p>
              <p className="text-[#63574D] text-lg leading-relaxed">
                My experience spans Data Analyst Internship at Otoritas Jasa Keuangan (OJK), Research Assistantship at PPMS ITB in mathematical optimization, ITB Data Analysis Laboratory Assistantship, and leading national Data Science competitions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#241E1A]">MY SKILLS</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <h4 className="font-semibold text-[#241E1A] mb-3 uppercase tracking-wider text-sm">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-[#D6CBBF] text-[#4A3F35] bg-[#FAF8F5] hover:text-[#241E1A] hover:border-[#241E1A] transition-colors py-1 px-3 text-sm font-normal rounded-full shadow-sm"
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
