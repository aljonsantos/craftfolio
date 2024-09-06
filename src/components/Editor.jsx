import Header from './Header'
import Previewer from "./Previewer"
import EditorPanel from "./EditorPanel"

const Editor = () => {
  return (
    <div className="editor">
      <div className="main-wrapper">
        <Header />
        <Previewer />
      </div>
      <EditorPanel />
    </div>
  )
}

export default Editor