import AccentComponent from "./AccentComponent"
import Section from "./Section"
import { IconArrowUpRight } from "../Common/Icons"

const projects = [
  {
    title: "WhisperNet",
    link: "",
    image: "/images/image-1.png",
    description: "Anonymous Feedback Platform",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A platform for users to give and receive anonymous feedback in personal or professional settings.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "React"]
  },
  {
    title: "InvestoGraph",
    link: "",
    image: "/images/image-2.png",
    description: "Stock Market Data Visualization",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel odio nec nisi dignissim venenatis.",
    technologies: ["React", "D3.js", "Redux"]
  },
  {
    title: "Jobify",
    link: "",
    image: "/images/image-3.png",
    description: "Job Application Tracker",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tool to help users manage job applications, deadlines, and networking opportunities.",
    technologies: ["Spring Boot", "Vue.js", "MySQL", "Bootstrap"]
  }
]

const ProjectCard = ({ project }) => {
  return (
    <AccentComponent widthClass="md:min-w-[300px] lg:w-[48%]">
      <div className="rounded-2xl border border-accent-100 overflow-hidden">
        <img className="mx-auto border-b border-accent-100 opacity-20" src={project.image} alt={project.title} />
        <div className="px-3 py-2 lg:px-4 lg:py-3">
            <ProjectTitle title={project.title} link={project.link} />
            <p className="text-sm text-content-700">{project.description}</p>
        </div>
      </div>
    </AccentComponent>
  )
}

const ProjectList = ({ project }) => {
  return (
    <AccentComponent>
      <div className="flex flex-col gap-2 px-4 py-4 lg:px-5 lg:py-5">
        <ProjectTitle title={project.title} link={project.link} />
        <p className="text-content-content">{project.description}</p>
        <p className="text-content-700 max-w-[60ch]">{project.explanation}</p>
        <ProjectTechnologies technologies={project.technologies} />
      </div>
    </AccentComponent>
  )
}

const ProjectTitle = ({ title, link }) => {
  return (
    <a href={link} className="w-max flex gap-2 text-lg font-bold text-accent-700 hover-text-accent-800 transition-all hover:gap-3">
      {title}
      <IconArrowUpRight classes="mt-1"/>
    </a>
  )
}

const ProjectTechnologies = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <div key={index} className="text-sm text-accent border border-accent/20 bg-accent/10 px-2 rounded-3xl">{tech}</div>
      ))}
    </div>
  )
}

const Projects = ({ content }) => {
  const { layout } = content.pages.projects
  
  return (
    <Section title="Projects">
      <div className={`flex flex-col md:flex-row md:flex-wrap ${layout === 'cards' ? 'gap-4 lg:gap-6' : 'gap-2'}`}>
        {projects.map((project, index) => layout === 'cards'
          ? <ProjectCard key={index} project={project} />
          : <ProjectList key={index} project={project} />
        )}
      </div>
    </Section>
  )
}

export default Projects