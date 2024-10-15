import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import AppContext from '../../contexts/AppContext'
import ThemeContext from '../../contexts/ThemeContext'
import { getEnabledPages } from '../../hooks/useContentState'
import { IconContrast } from './Icons'
import Fade from './Fade'

const Navbar = ({ content }) => {  
  const { fullscreen, activePage, setActivePage } = useContext(AppContext)
  const { toggleTheme } = useContext(ThemeContext)
  const enabledPages = getEnabledPages(content)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)

  useEffect(() => {
    handleActivePageLinkPos(activePage)
  }, [activePage])

  const [navLinkPos, setNavLinkPos] = useState({
    left: 0,
    width: 0,
  })

  const handleActivePageLinkPos = (newActivePage) => {    
    const activeLink = document.querySelector(`[data-nav-section="${newActivePage}"]`)
    if (activeLink) {
      setNavLinkPos({
        width: activeLink.getBoundingClientRect().width - 2,
        left: activeLink.offsetLeft + 1,
      })
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    const container = fullscreen ? window : document.querySelector('.previewer')
    
    // scroll to the clicked nav-section
    if (content.page === 'single') {
      
      const target = document.querySelector(`#${e.target.dataset.navSection}`)
      const targetRectTop = target.getBoundingClientRect().top
      let offset =  window.innerWidth < 768 ? 0 : 150
      
      const targetOffset = fullscreen
      ? targetRectTop + window.pageYOffset
      : targetRectTop + container.scrollTop - container.getBoundingClientRect().top
      
      container.scrollTo({
        top: targetOffset - offset,
        behavior: 'smooth'
      })
      setIsAutoScrolling(true)

    } else {
      container.scrollTo({ top: 0 })
    }

    setActivePage(e.target.dataset.navSection)
  }

  useEffect(() => {
    if (content.page === 'single') {
      const sections = document.querySelectorAll('.nav-section')
      const container = fullscreen
        ? window
        : document.querySelector('.previewer')
  
      const handleScroll = () => {
        let activeSection
  
        sections.forEach((section) => {
          const { top, bottom } = section.getBoundingClientRect()
          const viewportHeight = fullscreen 
            ? window.innerHeight 
            : document.querySelector('.previewer').clientHeight

          if (container.scrollY === 0) {
            activeSection = sections[0].id
          } else {
            // check if the section covers more than 50% of the viewport/container height
            if (top < viewportHeight / 2 && bottom > viewportHeight / 2) {
              activeSection = section.id
            }
          }
        })

        if (isAutoScrolling) {
          if (activeSection === activePage) {
            setIsAutoScrolling(false)
          }
        } else {
          setActivePage(activeSection)
        }
      }
  
      container.addEventListener('scroll', handleScroll)
      // handleScroll()
  
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [content.page, fullscreen, setActivePage, enabledPages, isAutoScrolling, activePage])

  let links = enabledPages.map(
    page => <li key={page}><a href="" data-nav-section={page} onClick={handleClick} className={`${page === activePage ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all duration-500 hover:bg-accent-200/20 hover:text-accent-800 hover:font-semibold`}>{page}</a></li>
  )

  return (
    <nav className={`navbar fixed md:sticky w-full ${fullscreen ? 'bottom-[24px]' : 'bottom-[80px]' } lg:bottom-[50px] left-0 md:top-[70px] flex justify-center items-center z-50 lg:mb-6`}>
      <ul className="flex border capitalize bg-background-700/10 backdrop-blur-xl backdrop-saturate-150 md:bg-background-700 text-[13px] md:text-[14px] text-accent-800 border-accent-100 rounded-3xl shadow-lg lg:shadow-xl active:scale-[98%] transition-transform">
        <Fade props={{ className: 'flex relative '}}>
          {links}
          <motion.li
            className="active-pill absolute bg-accent-200 rounded-full h-[calc(100%-4px)] top-1/2 -translate-y-1/2 -z-10" 
            animate={navLinkPos}
            initial={false}
          />
        </Fade>
      </ul>
      <button className='border p-2 md:p-[10px] ml-3 md:ml-4 rounded-full bg-background-700/10 backdrop-blur-xl backdrop-saturate-150 md:bg-background-700 text-[13px] md:text-[14px] text-content-700 border-border/10 shadow-lg lg:shadow-xl lg:hover:scale-105 lg:active:scale-100' onClick={toggleTheme}>
        <Fade>  
          <IconContrast />
        </Fade>
      </button>
    </nav>
  )
}

export default Navbar