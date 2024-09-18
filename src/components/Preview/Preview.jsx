import { useState } from 'react'
import { getEnabledPages } from '../../hooks/useContentState'

import About from './About'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import Navbar from './Navbar'
import AboutMeCard from './AboutMeCard'

const Preview = ({ content, fullScreenView }) => {
  const enabledPages = getEnabledPages(content)
  const [activePage, setActivePage] = useState('about')

  const pagesComponent = {
    about: <About content={content} />,
    projects: <Projects content={content} />,
    blog: <Blog />,
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
    <div className={`main ${content.page} text-sm md:text-base lg:text-base max-w-[480px] p-[24px] pb-[70px] md:py-[70px] flex flex-col md:flex-row md:gap-[50px] md:max-w-[700px] lg:p-[70px] lg:max-w-[1180px] mx-auto`}>
      <div className="pb-0 mx-auto shrink-0 md:min-w-[255px] md:w-[35%] lg:w-[30%]">
        <AboutMeCard />
      </div>
      <div className="relative w-full">
        <Navbar content={content} activePage={activePage} setActivePage={setActivePage} fullScreenView={fullScreenView} />
        {pages}
      </div>
    </div>
  )
}

export default Preview