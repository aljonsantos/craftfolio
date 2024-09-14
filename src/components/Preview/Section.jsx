import AccentComponent from "./AccentComponent"
import Title from "./Title"

const Section = ({ title, children }) => {
  return (
    <AccentComponent roundedClass="rounded-xl">
      <div className="px-4 py-5 lg:px-5 lg:py-7 rounded-xl border border-transparent lg:hover:border-zinc-200 transition-all duration-400">
        <Title title={title} />
        {children}
      </div>
    </AccentComponent>
  )
}

export default Section