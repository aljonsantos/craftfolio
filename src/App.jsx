import { Routes, Route } from 'react-router-dom'
import './index.css'

import useContentState from './hooks/useContentState'

import Editor from './pages/Editor'
import Preview from './pages/Preview'

const App = () => {
  const [content, setContent] = useContentState()

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path={`/preview${content.page === 'multi' ? '/*' : ''}`} element={<Preview />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
