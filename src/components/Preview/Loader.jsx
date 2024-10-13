import { useState, useEffect } from 'react'

const Loader = ({ children, delay = 200 }) => {
  const [stylesApplied, setStylesApplied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStylesApplied(true)
    }, delay)

    return () => clearTimeout(timer);
  }, [delay])

  return (
    <div style={{ opacity: stylesApplied ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      {children}
    </div>
  )
}

export default Loader
