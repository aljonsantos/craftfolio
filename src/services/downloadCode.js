import axios from 'axios'

const downloadCode = async (content) => {
  try {
    const response = await axios.post('/api/download-code', { content }, { responseType: 'blob' })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default downloadCode