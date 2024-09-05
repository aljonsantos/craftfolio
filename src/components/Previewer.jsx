import Preview from "./Preview"

const Previewer = ({ content }) => {
  return (
    <div className="previewer lg:border border-solid border-gray-300 overflow-y-scroll">
      <Preview content={content} />
    </div>
  )
}

export default Previewer