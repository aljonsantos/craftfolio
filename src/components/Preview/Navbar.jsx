import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useContentState, { getEnabledPages } from '../../hooks/useContentState'

const Navbar = () => {
  const [content, setContent] = useContentState()
  const [active, setActive] = useState('about')
  const [showNavbar, setShowNavbar] = useState(true)
  const prevScrollY = useRef(0)
  
  const enabledPages = getEnabledPages(content)

  const handleClick = (e) => {
    if (content.page === 'multi') {
      setActive(e.target.innerText.toLowerCase())
    }
  }

  useEffect(() => {
    const handleScroll = () => {

      // if hovering over navbar, don't hide it
      if (document.querySelector('.navbar:hover')) {
        return
      }

      // if scrolling down, hide navbar, else show it
      const currentScrollY = window.scrollY
      if (currentScrollY > prevScrollY.current) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      prevScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    if (content.page === 'single') {
      const sections = document.querySelectorAll('.section')
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
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
  }, [content.page])

  if (enabledPages.length === 1) {
    return
  }

  let links = null
  if (content.page === 'single') {
    links = enabledPages.map(
      page => <li key={page}><a href={`#${page}`} onClick={handleClick} className={`${page === active ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all hover:bg-zinc-200 hover:text-zinc-900 hover:font-semibold`}>{page}</a></li>
    )
  } else {
    links = enabledPages.map(
      page => <li key={page}><Link to={page} onClick={handleClick} className={`${page === active ? 'active': ''} px-[1em] py-[.8em] inline-block rounded-full m-[1px] transition-all hover:bg-zinc-200 hover:text-zinc-900 hover:font-semibold`}>{page}</Link></li>
    )
  }
  
  return (
    <nav className={`navbar fixed w-full bottom-[24px] lg:bottom-[36px] left-0 flex justify-center z-10 transition-all duration-400 ${showNavbar ? 'translate-y-0 opacity-100' : 'translate-y-[180%] opacity-50'}`}>
      <ul className="flex border capitalize text-xs md:text-[14px] text-zinc-700 border-zinc-300 rounded-full bg-zinc-100">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar