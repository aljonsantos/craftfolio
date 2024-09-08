import { useState, useEffect } from 'react'

const defaultContent = {
  page: 'single',
  pages: {
    about:{
      enabled: true,
      sections: ['education', 'experience', 'tech-skills']
    },
    projects:{
      enabled: true,
      layout: 'cards'
    },
    blog: {
      enabled: true,
      layout: 'list'
    },
    contact:{
      enabled: true
    }
  }
}

const useContentState = () => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem('content')) ||
    defaultContent
  )

  useEffect(() => {
    localStorage.setItem('content', JSON.stringify(content))
  }, [content])

  return [content, setContent]
}

export default useContentState