import SectionTitle from "./SectionTitle"

const PanelSection = ({ title, titleRightEl, noSeparator, children }) => {
  return (
    <div className={`panel-section py-4 px-5 pr-3 border-border/10 lg:pl-8 ${!noSeparator ? 'border-b' : ''}`}>
      <SectionTitle title={title} titleRightEl={titleRightEl} />
      {children}
    </div>
  )
}

export default PanelSection