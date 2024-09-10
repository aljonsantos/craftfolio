import { Link } from 'react-router-dom'
import useContentState, { getEnabledPages } from '../../hooks/useContentState'

const Navbar = () => {
  const [content, setContent] = useContentState()
  const enabledPages = getEnabledPages(content)

  if (enabledPages.length === 1) {
    return
  }

  let links = null
  if (content.page === 'single') {
    links = enabledPages.map(
      page => <li key={page}><a href={`#${page}`} >{page}</a></li>
    )
  } else if (content.page === 'multi') {
    links = enabledPages.map(
      page => <li key={page}><Link to={page} >{page}</Link></li>
    )
  }
  
  return (
    <nav className="navbar text-blue-500 fixed top-0 right-0">
      <ul className="flex gap-2">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar