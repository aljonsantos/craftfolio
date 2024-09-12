import { Routes, Route } from 'react-router-dom'
import useContentState, { getEnabledPages } from '../hooks/useContentState'

import About from '../components/Preview/About'
import Projects from '../components/Preview/Projects'
import Blog from '../components/Preview/Blog'
import Contact from '../components/Preview/Contact'
import Navbar from '../components/Preview/Navbar'
import AboutMeCard from '../components/Preview/AboutMeCard'

const Preview = () => {
  const [content, setContent] = useContentState()
  const enabledPages = getEnabledPages(content)

  const pages = {
    about: <About />,
    projects: <Projects />,
    blog: <Blog />,
    contact: <Contact />
  }

  let structure = null
  if (content.page === 'single') {
    structure = enabledPages.map(
      page => <div key={page}>{pages[page]}</div>
    )
  } else if (content.page === 'multi') {
    structure = (
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          {enabledPages.map(page => <Route key={page} path={page} element={pages[page]} />)}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    )
  }

  return (
    <div className={`main ${content.page} text-sm md:text-base lg:text-base max-w-[480px] p-[24px] pb-[70px] md:py-[70px] flex flex-col md:flex-row md:gap-[50px] md:max-w-[700px] lg:p-[70px] lg:max-w-[1110px] mx-auto`}>
      <div className="pb-0 mx-auto md:w-[35%] shrink-0">
        <AboutMeCard />
      </div>
      <div className="relative">
        <Navbar />
        <div className="hidden md:block fixed bg-white md:h-[140px] w-full top-0 z-30"></div>
        {structure}
      </div>
    </div>
  )
}

export default Preview