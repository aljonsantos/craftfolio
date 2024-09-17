import Preview from "../Preview/Preview"

const Previewer = ({ content }) => {
  return (
    <div id="previewer" className="previewer w-full lg:border border-dashed border-border/30 lg:rounded-2xl overflow-scroll">
      <Preview content={content} />
    </div>
  )
}

export default Previewer