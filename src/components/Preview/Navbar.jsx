import { useState, useEffect, useRef } from 'react'
import { getEnabledPages } from '../../hooks/useContentState'

const Navbar = ({ content, activePage, setActivePage }) => {
  const [showNavbar, setShowNavbar] = useState(true)
  const prevScrollY = useRef(0)
  
  const enabledPages = getEnabledPages(content)

  const handleClick = (e) => {
    e.preventDefault()
    setActivePage(e.target.innerText.toLowerCase())
  }

  useEffect(() => {
    let scrollContainer = document.getElementById('previewer') || window

    const handleScroll = () => {
      // if hovering over navbar, don't hide it
      if (document.querySelector('.navbar:hover')) {
        return
      }
      // if scrolling down, hide navbar, else show it
      const currentScrollY = scrollContainer.scrollTop
      if (currentScrollY > prevScrollY.current) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      prevScrollY.current = currentScrollY
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    if (content.page === 'single') {
      const sections = document.querySelectorAll('.section')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id)
            // setActivePage(entry.target.id)
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

  if (enabledPages.length === 1) {
    return
  }

  let links = enabledPages.map(
    page => <li key={page}><a href="" data-page={page} onClick={handleClick} className={`${page === activePage ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all duration-500 hover:bg-zinc-200 hover:text-zinc-900 hover:font-semibold`}>{page}</a></li>
  )

  return (
    <nav className={`navbar fixed md:sticky w-full bottom-[36px] lg:bottom-[50px] left-0 md:top-[70px] flex justify-center z-50 transition-all duration-500 md:translate-y-0 md:opacity-100 lg:mb-6 ${showNavbar ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-50'}`}>
      <ul className="flex border capitalize text-[13px] md:text-[14px] text-zinc-700 border-zinc-300 rounded-3xl bg-zinc-100 shadow-lg lg:shadow-xl lg:hover:scale-105 transition-all duration-500">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar