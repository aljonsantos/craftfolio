import axios from 'axios'

const downloadCode = async (content) => {
  try {
    const response = await axios.post('/api/download-code', { content }, { responseType: 'blob' })
    
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'code.zip')
    document.body.appendChild(link)
    
    link.click()

    document.body.removeChild(link)

  } catch (error) {
    console.error(error)
  }
}

export default downloadCode