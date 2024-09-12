import { Routes, Route } from 'react-router-dom'
import useContentState, { getEnabledPages } from '../hooks/useContentState'

import About from '../components/Preview/About'
import Projects from '../components/Preview/Projects'
import Blog from '../components/Preview/Blog'
import Contact from '../components/Preview/Contact'
import Navbar from '../components/Preview/Navbar'

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
      page => <div key={page} className="p-[24px] max-w-[480px] mx-auto md:max-w-[700px]">{pages[page]}</div>
    )
  } else if (content.page === 'multi') {
    structure = (
      <div className="p-[24px] max-w-[480px] mx-auto md:max-w-[700px]">
        <Routes>
          <Route path="/" element={<About />} />
          {enabledPages.map(page => <Route key={page} path={page} element={pages[page]} />)}
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    )
  }

  return (
    <div className={`main ${content.page} text-sm md:text-base lg:text-base md:py-[70px]`}>
      <Navbar />
      <div>
        <div className="hidden md:block fixed bg-white  md:h-[71px] w-full top-0 z-30"></div>
        {structure}
      </div>
    </div>
  )
}

export default Preview