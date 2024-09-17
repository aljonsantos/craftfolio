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
  },
  color: {
    choice: 'default',
    accent: {
      hue: 201,
      lightness: 32
    }
  }
}

export const getEnabledPages = (content) => {
  return Object.keys(content.pages).reduce((acc, key) => {
    return content.pages[key].enabled ? [...acc, key] : acc
  }, [])
}

const useContentState = () => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem('content')) ||
    defaultContent
  )

  useEffect(() => {
    localStorage.setItem('content', JSON.stringify(content))
  }, [content])

  const update = (obj, keys, value) => {
    const [key, ...rest] = keys.split('.')
  
    if (rest.length === 0) {
      return {
        ...obj,
        [key]: value
      }
    }
  
    return {
      ...obj,
      [key]: update(obj[key], rest.join('.'), value)
    }
  }

  const updateContent = (keys, value) => {
    setContent(update(content, keys, value))
  }

  return [content, updateContent]
}

export default useContentState