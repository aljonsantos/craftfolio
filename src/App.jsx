import { useContext } from 'react'
import './index.css'

import AppContext from './contexts/AppContext'
import useContentState from './hooks/useContentState'
import { ThemeContextProvider } from './contexts/ThemeContext'

import Header from './components/Editor/Header'
import Previewer from './components/Editor/Previewer'
import EditorPanel from './components/Editor/EditorPanel'
import Preview from './components/Preview/Preview'

const App = () => {
  const { fullscreen } = useContext(AppContext)
  const { content, updateContent } = useContentState()

  const handleUpdateContent = (key, value) => {
    updateContent(key, value)
  }

  return (
    <ThemeContextProvider>
      <div className={`app ${fullscreen ? 'full' : ''}`}>
        <div className="main-wrapper">
          <Header />
          {fullscreen
            ? <Preview content={content} />
            : <Previewer content={content} />}
        </div>
        <EditorPanel content={content} onUpdateContent={handleUpdateContent} />
      </div>
    </ThemeContextProvider>
  )
}

export default App
