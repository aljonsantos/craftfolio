import { useLocalStorageState } from "../App"
import Preview from "./Preview"

const Editor = () => {
  const [content, setContent] = useLocalStorageState('content')

  const handleChange = (e) => {
    setContent({ value: e.target.value })
  }

  return (
    <div>
      <h1>Editor</h1>
      <input type="text" value={content.value} onChange={handleChange} />
      <Preview content={content} />
      <a href="/preview" target="_blank">Preview in new tab</a>
    </div>
  )
}

export default Editor