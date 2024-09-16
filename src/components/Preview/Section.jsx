import AccentComponent from "./AccentComponent"
import Title from "./Title"

const Section = ({ title, children }) => {
  return (
    <AccentComponent roundedClass="rounded-xl">
      <div className="section pb-5 pt-3 lg:pb-7 rounded-xl border border-transparent lg:hover:border-accent-300/20 transition-all duration-400">
        <Title title={title} />
        {children}
      </div>
    </AccentComponent>
  )
}

export default Section