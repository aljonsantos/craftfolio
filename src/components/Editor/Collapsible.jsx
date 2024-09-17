import { useState, useEffect } from 'react'
import { IconArrowUp } from '../Common/Icons.jsx'

const Collapsible = ({ headerEl, type, toggleLabel, noSeparator, children }) => {
  const [expanded, setExpanded] = useState(false)
  const isDisabled = type === 'input' ? !headerEl.props.isChecked : false

  useEffect(() => {
    if (isDisabled) setExpanded(false)
  }, [isDisabled])

  return (
    <div className="collapsible">
      <div className="flex items-center">
        {headerEl}
        <button className={`text-[11px] text-content-700 uppercase ${toggleLabel ? 'pl-2' : 'pl-1'} pr-1 rounded-xl flex items-center gap-1 border-border/40 border ml-2 hover:bg-content/10 hover:text-content-700 disabled:opacity-50 disabled:pointer-events-none transition-all`} onClick={() => setExpanded(!expanded)} disabled={isDisabled}>
          {toggleLabel}
          <IconArrowUp size={16} flip={expanded} />
        </button>
      </div>
      <div className={`collapse-body h-0 opacity-0 overflow-hidden flex flex-col gap-4 border-border/10 transition-all ${ expanded ? `h-auto pt-5 pb-4 opacity-100 ${!noSeparator ? 'border-b' : '' }` : '' }`}>
        {children}
      </div>
    </div>
  )
}

export default Collapsible