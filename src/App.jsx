import { Routes, Route } from 'react-router-dom'
import './index.css'

import Editor from './components/Editor'
import Preview from './components/Preview'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  )
}

export default App
