import Preview from "./Preview"

const Previewer = ({ content }) => {
  return (
    <div className="previewer overflow-y-scroll">
      <Preview content={content} />
    </div>
  )
}

export default Previewer