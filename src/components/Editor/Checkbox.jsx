const getIndentClass = (indent) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']
  return indentValue[indent]
}

const Checkbox = ({ id, name, value, label, isChecked, isDisabled, onChange, indent = 0 }) => {
  return (
    <div className={`flex items-center gap-1 ${ getIndentClass(indent) }`}>
      <input id={id} type="checkbox" name={name} value={value} className="w-[1em] h-[1em] accent-black" checked={isChecked} disabled={isDisabled} onChange={onChange} />
      <label htmlFor={id} className="ml-1">{label}</label>
    </div>
  )
}

export default Checkbox