import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import { getEnabledPages } from '../../hooks/useContentState'

import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'
import Navbar from './Navbar'
import AboutMeCard from './AboutMeCard'

import Fade from './Fade'

const Preview = ({ content }) => {
  const { activePage } = useContext(AppContext)
  const enabledPages = getEnabledPages(content)

  const pagesComponent = {
    about: <About content={content} />,
    projects: <Projects content={content} />,
    blog: <Blogs content={content} />,
    contact: <Contact />
  }

  let pages = null
  if (content.page === 'single') {
    pages = enabledPages.map(
      page => <div key={page}>{pagesComponent[page]}</div>
    )
  } else if (content.page === 'multi') {
    pages = pagesComponent[activePage]
  }

  return (
    <div className={`main ${content.page} text-sm md:text-base lg:text-base max-w-[480px] pb-[70px] md:py-[70px] flex flex-col md:flex-row md:gap-[50px] md:max-w-[700px] lg:p-[70px] lg:max-w-[1180px] mx-auto`}>
      <Fade props={{ id: 'about', className:'nav-section pt-[24px] md:pt-0 pb-0 mx-auto shrink-0 md:min-w-[255px] md:w-[35%] lg:w-[30%]' }}>
        <AboutMeCard />
      </Fade>
      <div className="relative w-full">
        <Navbar content={content} />
        {pages}
      </div>
    </div>
  )
}

export default Preview