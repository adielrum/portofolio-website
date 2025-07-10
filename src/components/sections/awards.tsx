
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    image: "https://placehold.co/150x150.png",
  },
  {
    title: "Hackathon Winner",
    date: "March 2021",
    issuer: "Tech Conference 2021",
    description: "First place in a 24-hour hackathon for developing a mobile app that solves a real-world problem.",
    image: "https://placehold.co/150x150.png",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text inline-block">
            Awards & Recognition
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            A collection of my professional awards and recognitions.
          </p>
        </div>
        <div className="space-y-12">
          {awards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCard({ award }: { award: Award }) {
  return (
    <Card className="p-6 flex flex-col">
      <div className="text-center w-full">
        <CardTitle className="text-xl font-bold text-white mb-4">
          {award.title}
        </CardTitle>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={award.image}
            alt={`${award.issuer} logo`}
            width={50}
            height={50}
            className="rounded-full mb-4 object-cover"
          />
          <p className="text-gray-300">{award.issuer}</p>
          <p className="text-gray-400 text-sm">{award.date}</p>
        </div>
        <CardContent className="md:col-span-3 space-y-4 p-0 flex items-center">
          <p className="text-gray-300">{award.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
