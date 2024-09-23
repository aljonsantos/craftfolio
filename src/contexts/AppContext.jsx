import { createContext, useState } from 'react'

const AppContext = createContext()

const defaultState = {
  fullscreen: false,
  activePage: 'about'
}

export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState(defaultState)

  const toggleFullScreen = () => {
    setAppState({ ...appState, fullscreen: !appState.fullscreen })
  }

  const setActivePage = (page) => {
    setAppState({ ...appState, activePage: page })
  }

  return (
    <AppContext.Provider value={{ ...appState, toggleFullScreen, setActivePage }}>
      {children}
    </AppContext.Provider>
  )

}

export default AppContext
