import useLocalStorageState from "../hooks/useLocalStorageState"

const Preview = () => {
  const [content, setContent] = useLocalStorageState('content', { value: 'hello world' })

  return (
    <div>
      {/* <p>{content.value}</p> */}
    </div>
  )
}

export default Preview