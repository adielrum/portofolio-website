'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { experience } from '@/data';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 bg-[#EFE8DE] text-[#241E1A] border-t border-[#E2D8CC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#241E1A]">EXPERIENCE</h2>
          <p className="max-w-2xl mx-auto text-[#63574D] text-lg">
            My professional journey and contributions.
          </p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical Line for Timeline (Desktop) */}
          <div className="hidden md:block absolute left-[28px] top-4 bottom-4 w-[1px] bg-[#E2D8CC]" />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="relative pl-0 md:pl-20">
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-14 h-14 items-center justify-center bg-[#FAF8F5] border border-[#E2D8CC] rounded-full z-10 shadow-sm">
                  <Image
                    src={item.image}
                    alt={`${item.company} logo`}
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                  />
                </div>

                <Card className="bg-[#FAF8F5] border border-[#E2D8CC] hover:border-[#C88A42]/50 shadow-sm transition-colors duration-300">
                  <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
                    <div className="flex items-center gap-4 md:gap-0">
                      <Image
                        src={item.image}
                        alt={`${item.company} logo`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover md:hidden"
                      />
                      <div>
                        <CardTitle className="text-xl font-bold text-[#241E1A]">{item.title}</CardTitle>
                        <p className="text-[#63574D] font-medium">{item.company}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit border-[#E2D8CC] text-[#63574D] bg-[#EFE8DE] rounded-full px-4 py-1">
                      {item.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-4">
                    <ul className="list-disc list-inside space-y-2 text-[#4A3F35] ml-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-base leading-relaxed pl-2 -indent-2">{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-[#EFE8DE] text-[#4A3F35] border-none rounded-md px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
