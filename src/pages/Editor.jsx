import Header from '../components/Editor/Header'
import Previewer from '../components/Editor/Previewer'
import EditorPanel from '../components/Editor/EditorPanel'

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