'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

import { education } from "@/data";
import type { Education } from "@/lib/types";

export default function Education() {
  return (
    <section id="education" className="w-full py-20 bg-[#F6F2EC] text-[#241E1A] border-t border-[#E2D8CC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#241E1A]">EDUCATION</h2>
          <p className="max-w-2xl mx-auto text-[#63574D] text-lg">
            My academic background and qualifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <EducationCard education={edu} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="grid md:grid-cols-4 gap-8 p-8 bg-[#FAF8F5] border border-[#E2D8CC] hover:border-[#C88A42]/50 shadow-sm transition-colors duration-300">
      <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
        <Image
          src={education.image}
          alt={`${education.institution} logo`}
          width={80}
          height={80}
          className="rounded-full mb-4 object-cover border border-[#E2D8CC]"
        />
        <CardTitle className="text-xl font-bold text-[#241E1A] mb-1">
          {education.degree}
        </CardTitle>
        <p className="text-[#63574D] font-medium mb-2">{education.institution}</p>
        <Badge variant="outline" className="border-[#E2D8CC] text-[#63574D] bg-[#EFE8DE] font-normal">
          {education.date}
        </Badge>
      </div>
      <CardContent className="md:col-span-3 space-y-6 p-0 pt-4 md:pt-0">
        <ul className="list-disc list-inside space-y-2 text-[#4A3F35] ml-2">
          {education.description.map((desc, descIndex) => (
            <li key={descIndex} className="text-base leading-relaxed pl-2 -indent-2">{desc}</li>
          ))}
        </ul>
        <div className="space-y-2">
          <p className="text-sm text-[#8C7B6D] uppercase tracking-wider font-semibold">Relevant Courses</p>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course, courseIndex) => (
              <Badge
                key={courseIndex}
                variant="secondary"
                className="bg-[#EFE8DE] text-[#4A3F35] border-none rounded-md px-3 py-1"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
