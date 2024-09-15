import Preview from "../Preview/Preview"

const Previewer = ({ content }) => {
  return (
    <div id="previewer" className="previewer w-full lg:border border-dashed border-zinc-300 lg:rounded-2xl overflow-scroll">
      <Preview content={content} />
    </div>
  )
}

export default Previewer