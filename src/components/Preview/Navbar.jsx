import { useEffect } from 'react'
import { getEnabledPages } from '../../hooks/useContentState'

const Navbar = ({ content, activePage, setActivePage, fullScreenView }) => {  
  const enabledPages = getEnabledPages(content)

  const handleClick = (e) => {
    if (content.page === 'single') {
      // scrollTo
    }
    else {
      e.preventDefault()
      setActivePage(e.target.dataset.page)
    }
  }

  useEffect(() => {
    if (content.page === 'single') {
      const sections = document.querySelectorAll('.nav-section')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id)
          }
        })
      }, {
        root: null,
        threshold: 0.5
      })

      sections.forEach((section) => observer.observe(section))
      return () => {
        sections.forEach((section) => observer.unobserve(section))
      }
    }
  }, [content.page, setActivePage])

  let links = enabledPages.map(
    page => <li key={page}><a href={`#${page}`} data-page={page} onClick={handleClick} className={`${page === activePage ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all duration-500 hover:bg-accent-200 hover:text-accent-800 hover:font-semibold`}>{page}</a></li>
  )

  return (
    <nav className={`navbar fixed md:sticky w-full ${fullScreenView ? 'bottom-[24px]' : 'bottom-[80px]' } lg:bottom-[50px] left-0 md:top-[70px] flex justify-center z-50 md:translate-y-0 md:opacity-100 lg:mb-6 transition-all duration-500`}>
      <ul className="flex border capitalize bg-background-700/10 backdrop-blur-xl backdrop-saturate-150 md:bg-background-700 text-[13px] md:text-[14px] text-accent-800 border-accent-100 rounded-3xl shadow-lg lg:shadow-xl lg:hover:scale-105 lg:active:scale-100 transition-transform duration-500">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar