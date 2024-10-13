import Title from "./Title"
import Fade from "./Fade"

const Section = ({ title, classes, children }) => {
  const id = title.toLowerCase().split(" ").join("-")

  return (
    <Fade props={{ id, className: `${classes} section pb-5 pt-3 lg:pb-7` }}>
      <Title title={title} />
      <Fade props={{ className: 'section-body' }}>
        {children}
      </Fade>
    </Fade>
  )
}

export default Section