'use client';

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { awards } from "@/data";
import type { Award } from "@/lib/types";

export default function Awards() {
  return (
    <section id="awards" className="w-full py-20 bg-[#F6F2EC] text-[#241E1A] border-t border-[#E2D8CC]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="mx-auto bg-[#EFE8DE] p-3 rounded-full w-fit mb-4 border border-[#E2D8CC]">
            <Trophy className="h-8 w-8 text-[#C88A42]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#241E1A]">AWARDS & RECOGNITION</h2>
          <p className="max-w-2xl mx-auto text-[#63574D] text-lg">
            Honors and achievements from my professional & academic journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <AwardCard award={award} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }: { award: Award }) {
  return (
    <Card className="h-full p-8 bg-[#FAF8F5] border border-[#E2D8CC] hover:border-[#C88A42]/50 shadow-sm transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-[#C88A42]/10 blur-xl rounded-full" />
          <Image
            src={award.image}
            alt={`${award.issuer} logo`}
            width={80}
            height={80}
            className="relative rounded-full object-cover border border-[#E2D8CC]"
          />
        </div>

        <div>
          <CardTitle className="text-xl font-bold text-[#241E1A] mb-2">
            {award.title}
          </CardTitle>
          <p className="text-[#63574D] font-medium">{award.issuer}</p>
          <p className="text-[#8C7B6D] text-sm mt-1">{award.date}</p>
        </div>

        <CardContent className="p-0 pt-2">
          <p className="text-[#4A3F35] leading-relaxed">{award.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
