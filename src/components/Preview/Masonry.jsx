import { useState, useEffect, useRef } from 'react'

const Masonry = ({ minColWidth, numCols, children }) => {
  const containerRef = useRef(null)
  const childrenCount = useRef(children.length)
  const [containerWidth, setContainerWidth] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(0)
  
  useEffect(() => {
    const container = containerRef.current

    const getGap = () => {
      const gap = window.getComputedStyle(container).gap
      return parseInt(gap)
    }

    const getMaxColHeight = () => {
      const items = container.children
      const numItems = items.length
      const numColItems = Math.ceil(numItems / numCols)
      const colHeights = Array(numCols).fill(0)

      let i = 0
      for (let c = 0; c < numCols; c++) {
        for (let j = 0; j < numColItems && i < numItems; j++) {
          colHeights[c] += items[i++].offsetHeight
        }
      }

      return `${Math.max(...colHeights) + (getGap() * numColItems)}px`
    }

    const setContainerHeight = (height) => {
      container.style.height = height
    }

    const setItemsWidth = (width) => {
      const items = container.children
      for (let i = 0; i < items.length; i++) {
        items[i].style.width = width
      }
    }

    const handleResize = () => {
      if (!imagesLoaded) return
      
      setContainerWidth(container.offsetWidth)

      if (numCols < 2) {
        return
      }

      if (containerWidth / numCols > minColWidth) {
        setItemsWidth((containerWidth - (getGap() * (numCols-1))) / numCols + 'px')
        setContainerHeight(getMaxColHeight())
      } else {
        setItemsWidth('100%')
        setContainerHeight('auto')
      }

    }
    
    if (childrenCount.current !== children.length) {
      setContainerHeight(getMaxColHeight)
      childrenCount.current = children.length
    }

    Promise.all(Array.from(container.querySelectorAll('img')).filter(img => !img.complete).map(img => 
      new Promise(resolve => { img.onload = img.onerror = resolve; })))
      .then(() => {
        setImagesLoaded(true)
    })

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [children.length, containerWidth, minColWidth, numCols, imagesLoaded])

  return (
    <div className="masonry flex flex-col flex-wrap items-start gap-3 lg:gap-5" ref={containerRef}>
      {children}
    </div>
  )
}

export default Masonry