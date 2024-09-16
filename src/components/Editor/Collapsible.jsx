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
        <button className={`text-[11px] text-zinc-700 uppercase bg-zinc-100 ${toggleLabel ? 'pl-2' : 'pl-1'} pr-1 rounded-xl flex items-center gap-1 border ml-2 hover:bg-zinc-200 hover:text-zinc-900 hover:border-zinc-400 disabled:opacity-50 disabled:pointer-events-none transition-all`} onClick={() => setExpanded(!expanded)} disabled={isDisabled}>
          {toggleLabel}
          <IconArrowUp size={16} flip={expanded} />
        </button>
      </div>
      <div className={`collapse-body h-0 opacity-0 overflow-hidden flex flex-col gap-4 border-b-zinc-200 transition-all ${ expanded ? `h-auto pt-5 pb-4 opacity-100 ${!noSeparator ? 'border-b' : '' }` : '' }`}>
        {children}
      </div>
    </div>
  )
}

export default Collapsible