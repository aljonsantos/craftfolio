import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useContentState, { getEnabledPages } from '../../hooks/useContentState'

const Navbar = () => {
  const [content, setContent] = useContentState()
  const enabledPages = getEnabledPages(content)
  const [active, setActive] = useState('about')
  
  const handleClick = (e) => {
    if (content.page === 'multi') {
      setActive(e.target.innerText.toLowerCase())
    }
  }

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
      page => <li key={page}><a href={`#${page}`} onClick={handleClick} className={`${page === active ? 'active': ''} px-3 py-2 inline-block rounded-full m-[1px] transition-all hover:bg-zinc-200 hover:text-zinc-900 hover:font-semibold`}>{page}</a></li>
    )
  } else {
    links = enabledPages.map(
      page => <li key={page}><Link to={page} onClick={handleClick} className={`${page === active ? 'active': ''} px-3 py-2 inline-block rounded-full m-[1px] transition-all hover:bg-zinc-200 hover:text-zinc-900 hover:font-semibold`}>{page}</Link></li>
    )
  }
  
  return (
    <nav className="navbar fixed bottom-[24px] lg:bottom-[36px] w-full flex justify-center transition-all duration-400">
      <ul className="flex border capitalize text-[14px] text-zinc-700 border-zinc-300 rounded-full bg-zinc-100">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar