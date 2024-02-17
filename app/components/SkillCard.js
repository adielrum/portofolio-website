"use client"
import React from 'react'

const SkillCard = ({ skill }) => {
    
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        <div className="text-2xl mr-4">{skill.icon}</div>
        <h3 className="font-bold">{skill.name}</h3>
      </div>
    </div>
  )
}

export default SkillCard
