import { useState } from 'react'
import './index.css'

import useContentState from './hooks/useContentState'
import { ThemeContextProvider } from './contexts/ThemeContext'

import Header from './components/Editor/Header'
import Previewer from './components/Editor/Previewer'
import EditorPanel from './components/Editor/EditorPanel'
import Preview from './components/Preview/Preview'

const App = () => {
  const [fullScreenView, setFullScreenView] = useState(false)
  const [content, updateContent] = useContentState()

  const handleToggleFullScreenView = () => {
    setFullScreenView(!fullScreenView)
  }

  const handleUpdateContent = (key, value) => {
    updateContent(key, value)
  }

  return (
    <ThemeContextProvider>
      <div className={`app ${fullScreenView ? 'full' : ''}`}>
        <div className="main-wrapper">
          <Header fullScreenView={fullScreenView} toggleFullScreenView={handleToggleFullScreenView} />
          {fullScreenView 
            ? <Preview content={content} fullScreenView={fullScreenView} />
            : <Previewer content={content} />}
        </div>
        <EditorPanel content={content} onUpdateContent={handleUpdateContent} />
      </div>
    </ThemeContextProvider>
  )
}

export default App
