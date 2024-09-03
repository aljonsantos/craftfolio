import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Editor from './components/Editor'
import Preview from './components/Preview'

export const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [content, setContent] = useLocalStorageState('content', { value: 'hello world' })

  return (
    <Routes>
      <Route path="/" element={<Editor />} />
      <Route path="/preview" element={<Preview content={content} />} />
    </Routes>
  )
}

export default App
