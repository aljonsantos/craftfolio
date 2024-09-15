import SectionTitle from "./SectionTitle"

const PanelSection = ({ title, children }) => {
  return (
    <div className="panel-section py-4 px-5 pr-3 lg:pl-8 border-b">
      <SectionTitle title={title} />
      {children}
    </div>
  )
}

export default PanelSection