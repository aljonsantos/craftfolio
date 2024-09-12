import useContentState from "../../hooks/useContentState"

import AboutMeCard from "./AboutMeCard"
import AboutMe from "./AboutMe"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import SoftSkills from "./SoftSkills"
import Certifications from "./Certifications"

const About = () => {
  const [content, setContent] = useContentState()
  const { sections } = content.pages.about

  return (
    <div id="about" className="section">
      <AboutMeCard />
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