import { useLocalStorageState } from "../App"
import Header from './Header'
import Previewer from "./Previewer"
import EditorPanel from "./EditorPanel"

const Editor = () => {
  const [content, setContent] = useLocalStorageState('content', { value: 'hello world' })

  const handleChange = (e) => {
    setContent({ value: e.target.value })
  }

  return (
    <div className="editor">
      <div className="main-wrapper">
        <Header />
        <Previewer content={content} />
      </div>
      <EditorPanel content={content} onContentChange={handleChange} />
    </div>
  )
}

export default Editor