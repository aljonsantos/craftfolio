import Title from "./Title"

const skills = {
  programmingLanguages: ['JavaScript', 'Typescript', 'Python', 'Java', 'HTML', 'CSS'],
  libraryFrameworks: ['React', 'Redux', 'Node.js', 'Express', 'GraphQL', 'Next.js', 'TailwindCSS'],
  toolsPlatforms: ['Git', 'GitHub', 'Vercel', 'Firebase', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'AWS S3'],
}

const Section = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-semibold pl-1">{title}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {content.map((item, index) => (
          <div key={index} className=" text-zinc-500 border border-zinc-200 bg-zinc-100 px-2 rounded-3xl">{item}</div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="skills">
      <Title title="Skills" textSize="base" />
      <div className="flex flex-col gap-3">
        <Section title="Programming Languages" content={skills.programmingLanguages} />
        <Section title="Library & Frameworks" content={skills.libraryFrameworks} />
        <Section title="Tools & Platforms" content={skills.toolsPlatforms} />
      </div>
    </div>
  )
}

export default Skills