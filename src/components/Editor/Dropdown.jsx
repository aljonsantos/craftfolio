import { useState, useEffect, useRef } from 'react'

const Dropdown = ({ toogleComponent, children }) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='dropdown relative' ref={dropdownRef}>
      <div onClick={() => setOpen(!open)}>{toogleComponent}</div>
      <div className={`fixed md:absolute max-w-[85vw] top-24 left-1/2 -translate-x-1/2 md:top-20 md:left-auto md:-translate-x-0 lg:top-16 md:right-0 bg-background-700 rounded-2xl shadow-xl border border-border/10 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 max-h-0 overflow-hidden opacity-0 border-none'} transition-all duration-300`}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown