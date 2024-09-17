import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { IconExpand, IconContract, IconSun, IconMoon } from "../Common/Icons"

const Button = ({ children, onClick }) => {
  return (
    <button className="text-content-700 border border-border/30 p-2 rounded-2xl bg-content/[0.05]  hover:bg-content/20 hover:text-content hover:border-border/40 hover:scale-105 active:scale-100 transition-all" onClick={onClick} >
      {children}
    </button>
  )
}

const Header = ({ fullScreenView, toggleFullScreenView }) => {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`header ${fullScreenView ? 'transparent border-none shadow-none' : 'bg-background'} px-5 py-4 border-solid border border-t-0 border-border/20 rounded-b-2xl shadow-2xl lg:shadow-none lg:border-none`}>
      <div className="flex justify-between items-center max-w-[500px] md:max-w-[700px] lg:max-w-full mx-auto">
        <div className="content w-full flex items-center justify-between mr-3">
          <div>
            <h1 className="text-2xl font-bold">Preview</h1>
            <p className="text-xs text-content-700">me.com</p>
          </div>
          <div>
            <Button onClick={toggleTheme}>
              {theme === 'light' ? <IconMoon /> : <IconSun />}
            </Button>
          </div>
        </div>
        <Button onClick={toggleFullScreenView}>
          {fullScreenView ? <IconContract /> : <IconExpand />}
        </Button>
      </div>
    </div>
  )
}

export default Header
