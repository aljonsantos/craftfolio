import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import AppContext from '../../contexts/AppContext'
import { IconExpand, IconContract, IconSun, IconMoon, IconDownload } from "./Icons"

import downloadCode from '../../services/downloadCode'

const Button = ({ classes, onClick, children }) => {
  return (
    <button className={`${classes} text-content-700 border border-border/30 p-2 rounded-2xl bg-content/[0.05]  hover:bg-content-700 hover:text-background-700 hover:border-border/40 hover:scale-105 active:scale-100 transition-all`} onClick={onClick} >
      {children}
    </button>
  )
}

const Header = ({ content }) => {
  const { fullscreen, toggleFullScreen, activePage } = useContext(AppContext)
  const {theme, toggleTheme} = useContext(ThemeContext)

  const handleDownload = async (content) => {
    const data = await downloadCode(content)

    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'code.zip')
    document.body.appendChild(link)
    link.click()
    
    document.body.removeChild(link)
  }

  return (
    <div className={`header ${fullscreen ? 'transparent border-none shadow-none' : 'bg-background'} px-5 py-4 border-solid border border-t-0 border-border/20 rounded-b-2xl shadow-2xl lg:shadow-none lg:border-none`}>
      <div className="flex justify-between items-center max-w-[500px] md:max-w-[700px] lg:max-w-full mx-auto">
        <div className="content w-full flex items-center justify-between mr-3">
          <div>
            <h1 className="text-2xl font-bold">Preview</h1>
            <p className="text-xs text-content-700">{`example.com${content.page === 'multi' ? `/${activePage}` : '' }`}</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={toggleTheme}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </Button>
            <Button onClick={() => handleDownload(content)}>
              <IconDownload />
            </Button>
          </div>
        </div>
        <Button classes="btn fullscreen" onClick={toggleFullScreen}>
          {fullscreen ? <IconContract /> : <IconExpand />}
        </Button>
      </div>
    </div>
  )
}

export default Header
