import Title from "./Title"

const Section = ({ title, children }) => {
  const id = title.toLowerCase().split(" ").join("-")

  return (
    <div id={id} className="section pb-5 pt-3 lg:pb-7">
      <Title title={title} />
      {children}
    </div>
  )
}

export default Section