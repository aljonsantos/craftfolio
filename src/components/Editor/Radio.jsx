const getIndentClass = (indent) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']
  return indentValue[indent]
}

const Radio = ({ id, name, value, label, onChange, isChecked, isDisabled, indent = 0 }) => {
  return (
    <div className={`flex items-center gap-1 ${ getIndentClass(indent) }`}>
      <div className={`grid place-items-center ${isChecked ? 'opacity-100' : 'opacity-70'}`}>
        <input id={id} type="radio" name={name} value={value} className="appearance-none col-start-1 row-start-1 w-4 h-4 bg-content/20 rounded-full border border-content-700 z-10" onChange={onChange} checked={isChecked} disabled={isDisabled} />
        <div className={`w-2 h-2 col-start-1 row-start-1 bg-content rounded-full ${isChecked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} transition-all`} />
      </div>
      <label htmlFor={id} className={`ml-1 text-content ${isChecked ? 'opacity-100' : 'opacity-70'}`}>{label}</label>
    </div>
  )
}

export default Radio