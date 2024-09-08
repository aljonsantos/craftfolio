import useContentState from "../hooks/useContentState"

const Preview = () => {
  const [content, setContent] = useContentState()

  return (
    <div>
      <p>{content.value}</p>
    </div>
  )
}

export default Preview