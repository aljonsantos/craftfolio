const getIndentClass = (indent) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']
  return indentValue[indent]
}

const Tick = ({ classes }) => {
  return (
    <svg className={classes} fill="none" width={15} height={14} strokeWidth={3.5} stroke="currentColor" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4 4 10-10" />
    </svg>
  )
}

const Checkbox = ({ id, name, value, label, isChecked, isDisabled, onChange, indent = 0 }) => {
  return (
    <div className={`flex items-center gap-1 ${ getIndentClass(indent) }`}>
      <div className={`grid place-items-center ${isDisabled ? 'opacity-50' : ''} ${isChecked ? 'opacity-100' : 'opacity-70'}`}>
        <input id={`ch-${id}`} type="checkbox" name={name} value={value} className="appearance-none col-start-1 row-start-1 w-4 h-4 bg-content/20 rounded-md border border-content-700 z-10" checked={isChecked} disabled={isDisabled} onChange={onChange} />
        <div className={`w-4 h-4 col-start-1 row-start-1 bg-content rounded-md ${isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} transition-all`} >
          <Tick classes="text-background mt-[2px] -ml-[1px]" />
        </div>
      </div>
      <label htmlFor={`ch-${id}`} className={`ml-1 text-content ${isChecked ? 'opacity-100' : 'opacity-70'}`}>{label}</label>
    </div>
  )
}

export default Checkbox