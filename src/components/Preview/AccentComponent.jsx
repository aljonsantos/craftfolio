import { useEffect, useRef, useState } from 'react'
import Fade from './Fade'

const AccentComponent = ({ roundedClass = 'rounded-2xl', widthClass = '', border = true, children, fade, fadeUp }) => {
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

    const handleMouseEnter = (e) => {
      handleMouseMove(e)
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

  const content = (
    <>
      <div
        className={`hidden lg:block ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} absolute w-[200px] aspect-square bg-accent/50 saturate-150 blur-[124px] rounded-full z-40 pointer-events-none transition-opacity duration-500`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      {children}
    </>
  )

  return (
    <div className={`accent relative inline overflow-clip ${widthClass} ${roundedClass} border border-transparent ${border ? 'lg:hover:border-accent-300/20' : ''}`} ref={ref}>
      {fade || fadeUp ? <Fade onceVisible up={fadeUp}>{content}</Fade> : content}
    </div>
  )
}

export default AccentComponent