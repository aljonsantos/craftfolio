import { IconArrowUp } from "./Icons"

const PanelHeader = ({ open, togglePanel }) => {
  return (
    <div className="panel-header max-w-[500px] md:max-w-[700px] mx-auto h-14 flex justify-between items-center px-5 lg:pl-8 sticky top-0 w-full border-border/20 border-b overflow-hidden">
      <h2 className="font-bold">Craftfolio</h2>
      <button className="toggle" onClick={togglePanel}>
        <IconArrowUp stroke={1.8} flip={open} />
      </button>
    </div>
  )
}

export default PanelHeader