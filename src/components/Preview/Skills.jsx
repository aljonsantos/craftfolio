import Section from "./Section"

const skills = {
  programmingLanguages: ['JavaScript', 'Typescript', 'Python', 'Java', 'HTML', 'CSS'],
  libraryFrameworks: ['React', 'Redux', 'Node.js', 'Express', 'GraphQL', 'Next.js', 'TailwindCSS'],
  toolsPlatforms: ['Git', 'GitHub', 'Vercel', 'Firebase', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'AWS S3'],
  familiar: ['C', 'C++', 'C#', 'PHP', 'SASS', 'Bootstrap', 'Material-UI', 'Chakra-UI', 'Jest', 'React Testing Library']
}

const Part = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-3">
      {title && <p className="text-content-700 font-semibold pl-1">{title}</p>}
      <div className="flex flex-wrap gap-2 mb-2 md:text-sm">
        {content.map((item, index) => (
          <div key={index} className=" text-accent border border-accent-100/70 bg-accent/10 px-2 rounded-3xl">{item}</div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="flex flex-col gap-3">
        <p className="font-bold text-accent-700 ml-1">Proficient</p>
        <Part title="Programming Languages" content={skills.programmingLanguages} />
        <Part title="Library & Frameworks" content={skills.libraryFrameworks} />
        <Part title="Tools & Platforms" content={skills.toolsPlatforms} />
        <p className="font-bold text-accent-700 ml-1">Familiar</p>
        <Part content={skills.familiar} />
      </div>
    </Section>
  )
}

export default Skills