import AccentComponent from "./AccentComponent"
import Section from "./Section"
import Masonry from "./Masonry"
import { IconArrowUpRight } from "./Icons"

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
    code: "",
    image: "/images/image-2.png",
    description: "Stock Market Data Visualization",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel odio nec nisi dignissim venenatis.",
    technologies: ["React", "D3.js", "Redux"]
  },
  {
    title: "Jobify",
    link: "",
    code: "",
    image: "/images/image-3.png",
    description: "Job Application Tracker",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tool to help users manage job applications.",
    technologies: ["Spring Boot", "Vue.js", "MySQL", "Bootstrap"]
  },
  {
    title: "Creation AI",
    link: "",
    image: "/images/image-1.png",
    description: "AI Model Training Platform",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A platform for training and deploying AI models using TensorFlow.",
    technologies: ["Python", "TensorFlow", "Flask", "Docker"]
  }
]

const ProjectCard = ({ project }) => {
  return (
    <AccentComponent widthClass="" border={false} fade={true}>
      <div className="rounded-2xl border border-accent-300/30 overflow-hidden">
        <img className="mx-auto border-b border-accent-300/30 opacity-20" src={project.image} alt={project.title} />
        <div className="flex flex-col gap-1 lg:gap-2 px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4">
            <ProjectTitle title={project.title} link={project.link} code={project.code} />
            <p className="text-content">{project.description}</p>
            <p className="text-sm text-content-700">{project.explanation}</p>
            <ProjectTechnologies technologies={project.technologies} />
        </div>
      </div>
    </AccentComponent>
  )
}

const ProjectList = ({ project }) => {
  return (
    <AccentComponent roundedClass="lg:rounded-2xl" fade={true}>
      <div className="flex flex-col gap-2 py-2 lg:px-5 lg:py-4">
        <ProjectTitle title={project.title} link={project.link} code={project.code} />
        <p className="text-content-700 font-semibold">{project.description}</p>
        <p className="text-content-700 max-w-[60ch]">{project.explanation}</p>
        <ProjectTechnologies technologies={project.technologies} />
      </div>
    </AccentComponent>
  )
}

const ProjectTitle = ({ title, link, code }) => {
  return (
    <div className="flex justify-between items-center">
      <a href={link} className="max-w-[95%] text-base md:text-lg font-bold text-accent-700 hover:text-accent-800 transition-all group">
        <span>{title}</span>
        <IconArrowUpRight classes="text-xs inline ml-1 mb-[3px] transition-all group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </a>
      {code !== undefined && <a href={code} className="text-xs text-content-700 uppercase border border-border/20 px-2 rounded-full hover:text-accent-800 hover:bg-accent-100/50 transition-all">code</a>}
    </div>
  )
}

const ProjectTechnologies = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2 py-1">
      {technologies.map((tech, index) => (
        <div key={index} className="text-xs text-accent border border-accent/20 bg-accent/10 px-2 rounded-3xl">{tech}</div>
      ))}
    </div>
  )
}

const Projects = ({ content }) => {
  const { layout } = content.pages.projects

  const items = projects.map((p, i) => layout === 'cards'
    ? <ProjectCard key={i} project={p} />
    : <ProjectList key={i} project={p} />
  )

  const view = {
    cards: (
      <Masonry minColWidth={218} numCols={2} >
        {items}
      </Masonry>
    ),
    list: (
      <div className="flex flex-col gap-2">
        {items}
      </div>
    )
  }
  
  return (
    <Section title="Projects" classes="nav-section">
      {view[layout]}
    </Section>
  )
}

export default Projects