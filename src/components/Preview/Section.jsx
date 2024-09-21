import Title from "./Title"

const Section = ({ title, classes, children }) => {
  const id = title.toLowerCase().split(" ").join("-")

  return (
    <div id={id} className={`${classes} section pb-5 pt-3 lg:pb-7`}>
      <Title title={title} />
      <div className="section-body">
        {children}
      </div>
    </div>
  )
}

export default Section