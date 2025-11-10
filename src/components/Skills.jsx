import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=javascript' },
    { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Flask', icon: 'https://skillicons.dev/icons?i=flask' },
    { name: 'FastAPI', icon: 'https://skillicons.dev/icons?i=fastapi' },
    { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma' },
    { name: 'WordPress', icon: 'https://skillicons.dev/icons?i=wordpress' },
  ]

  return (
    <section id="skills" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-primary text-sm font-semibold uppercase tracking-wider text-center mb-2">
          Skills
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">My Skills</h2>
        <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 hover:-translate-y-1 hover:scale-110 transition-transform duration-300"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))' }}
              />
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
