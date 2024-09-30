import AppContext from '../../contexts/AppContext'
import { useEffect, useContext } from 'react'
import { getEnabledPages } from '../../hooks/useContentState'

const Navbar = ({ content }) => {  
  const { fullscreen, activePage, setActivePage } = useContext(AppContext)
  const enabledPages = getEnabledPages(content)

  const handleClick = (e) => {
    const container = fullscreen ? window : document.querySelector('.previewer')
    
    // scroll to the clicked nav-section
    if (content.page === 'single') {
      e.preventDefault()
      
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
  
        setActivePage(activeSection)
      }
  
      container.addEventListener('scroll', handleScroll)
      // handleScroll()
  
      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [content.page, fullscreen, setActivePage, enabledPages])

  let links = enabledPages.map(
    page => <li key={page}><a href="" data-nav-section={page} onClick={handleClick} className={`${page === activePage ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all duration-500 hover:bg-accent-200 hover:text-accent-800 hover:font-semibold`}>{page}</a></li>
  )

  return (
    <nav className={`navbar fixed md:sticky w-full ${fullscreen ? 'bottom-[24px]' : 'bottom-[80px]' } lg:bottom-[50px] left-0 md:top-[70px] flex justify-center z-50 md:translate-y-0 md:opacity-100 lg:mb-6 transition-all duration-500`}>
      <ul className="flex border capitalize bg-background-700/10 backdrop-blur-xl backdrop-saturate-150 md:bg-background-700 text-[13px] md:text-[14px] text-accent-800 border-accent-100 rounded-3xl shadow-lg lg:shadow-xl lg:hover:scale-105 lg:active:scale-100 transition-transform duration-500">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar