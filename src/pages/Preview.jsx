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
      page => <div key={page}>{pages[page]}</div>
    )
  } else if (content.page === 'multi') {
    structure = (
      <Routes>
        <Route path="/" element={<About />} />
        {enabledPages.map(page => <Route key={page} path={page} element={pages[page]} />)}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    )
  }

  return (
    <div className={`main ${content.page}`}>
      <Navbar />
      <div>
        {structure}
      </div>
    </div>
  )
}

export default Preview