import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import SoftSkills from "./SoftSkills"
import Certifications from "./Certifications"

const About = ({ content }) => {
  const { sections } = content.pages.about

  return (
    <div className="flex flex-col lg:gap-3">
      <AboutMe />
      { sections.includes('education') && <Education /> }
      { sections.includes('experience') && <Experience /> }
      { sections.includes('tech-skills') && <Skills /> }
      { sections.includes('soft-skills') && <SoftSkills /> }
      { sections.includes('certs') && <Certifications /> }
    </div>
  )
}

export default About