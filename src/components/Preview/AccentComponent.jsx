import { useEffect, useRef, useState } from 'react'

const AccentComponent = ({ roundedClass, children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setCursorPos({ x, y })
      setShow(true)
    };

    const handleMouseEnter = () => {
      setShow(true)
    }

    const handleMouseLeave = () => {
      setShow(false)
    }

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    }
  }, [])

  return (
    <div className={`relative overflow-clip ${roundedClass}`} ref={ref}>
      <div
        className={`${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} absolute w-[40%] aspect-square bg-accent/20 blur-[124px] rounded-full pointer-events-none transition-opacity duration-500 z-30`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      {children}
    </div>
  )
}

export default AccentComponent