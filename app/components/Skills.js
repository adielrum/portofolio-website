"use client"
import React from 'react';
import { SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiCplusplus, SiOwl } from 'react-icons/si';
import  SkillCard  from '../components/SkillCard';

const Skills = () => {
  const listSkill = [
    { "name": 'Javascript', "icon": <SiJavascript /> },
    { "name": 'Python', "icon": <SiPython /> },
    { "name": 'React.js', "icon": <SiReact /> },
    { "name": 'Next.js', "icon": <SiNextdotjs /> },
    { "name": 'TailwindCSS', "icon": <SiTailwindcss /> },
    { "name": 'C++', "icon": <SiCplusplus /> },
    { "name": 'DataStructure', "icon": <SiOwl /> },
    { "name": 'Algorithms', "icon": <SiOwl /> },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard skill={listSkill[0]} />
            <SkillCard skill={listSkill[1]} />
            <SkillCard skill={listSkill[2]} />
            <SkillCard skill={listSkill[3]} />
            <SkillCard skill={listSkill[4]} />
            <SkillCard skill={listSkill[5]} />
      </div>
    </div>
  )
}

export default Skills;