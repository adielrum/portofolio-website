'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface Award {
  title: string;
  date: string;
  issuer: string;
  description: string;
  image: string;
}

const awards: Award[] = [
  {
    title: "Best Final Year Project",
    date: "May 2022",
    issuer: "University of Example",
    description: "Awarded for the most innovative and well-executed final year project in the computer science department.",
    image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=Award",
  },
  {
    title: "Hackathon Winner",
    date: "March 2021",
    issuer: "Tech Conference 2021",
    description: "First place in a 24-hour hackathon for developing a mobile app that solves a real-world problem.",
    image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=Hack",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="w-full py-20 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="mx-auto bg-white/10 p-3 rounded-full w-fit mb-4 border border-white/20">
            <Trophy className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">AWARDS & RECOGNITION</h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Honors and achievements from my professional journey.
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
    <Card className="h-full p-8 bg-black border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />
          <Image
            src={award.image}
            alt={`${award.issuer} logo`}
            width={80}
            height={80}
            className="relative rounded-full object-cover grayscale border border-white/10"
          />
        </div>

        <div>
          <CardTitle className="text-xl font-bold text-white mb-2">
            {award.title}
          </CardTitle>
          <p className="text-gray-300 font-medium">{award.issuer}</p>
          <p className="text-gray-500 text-sm mt-1">{award.date}</p>
        </div>

        <CardContent className="p-0 pt-2">
          <p className="text-gray-400 leading-relaxed">{award.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
