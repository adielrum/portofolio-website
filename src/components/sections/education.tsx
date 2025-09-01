
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Education {
  institution: string;
  degree: string;
  date: string;
  description: string[];
  relevantCourses: string[];
  image: string;
}

const education: Education[] = [
  {
    institution: "Institut Teknologi Bandung",
    degree: "Bachelor of Science in Mathematics, Minor in Computer Science",
    date: "2023 - 2027",
    description: [
      "Dean's List for four consecutive semesters.",
      "Completed a final year project on machine learning.",
      "Active member of the university's coding club.",
    ],
    relevantCourses: [
      "Data Analysis",
      "Algorithm Design",
      "Linear Algebra",
      "Probability and Statistics",
      "Databases",
    ],
    image: "https://placehold.co/150x150.png",
  },
  {
    institution: "Another University",
    degree: "Master of Science in Artificial Intelligence",
    date: "2022 - 2024",
    description: [
      "Specialized in deep learning, natural language processing, and computer vision.",
      "Published a paper on novel neural network architectures.",
      "Teaching Assistant for undergraduate AI course.",
    ],
    relevantCourses: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics",
    ],
    image: "https://placehold.co/150x150.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text inline-block">
            Education
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            My academic background and qualifications.
          </p>
        </div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="grid md:grid-cols-4 gap-8 p-6">
      <div className="md:col-span-1">
        <Image
          src={education.image}
          alt={`${education.institution} logo`}
          width={50}
          height={50}
          className="rounded-full mb-4 object-cover"
        />
        <CardTitle className="text-xl font-bold text-white">
          {education.degree}
        </CardTitle>
        <p className="text-gray-300">{education.institution}</p>
        <p className="text-gray-400 text-sm">{education.date}</p>
      </div>
      <CardContent className="md:col-span-3 space-y-4 p-0">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {education.description.map((desc, descIndex) => (
            <li key={descIndex}>{desc}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {education.relevantCourses.map((course, courseIndex) => (
            <Badge
              key={courseIndex}
              className="bg-white/10 backdrop-blur-sm border-none text-gray-200"
            >
              {course}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
