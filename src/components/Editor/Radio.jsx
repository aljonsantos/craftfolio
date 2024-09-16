const getIndentClass = (indent) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']
  return indentValue[indent]
}

const Radio = ({ id, name, value, label, onChange, isChecked, indent = 0 }) => {
  return (
    <div className={`flex items-center gap-1 ${ getIndentClass(indent) }`}>
      <input id={id} type="radio" name={name} value={value} className="w-4 h-4 accent-black" onChange={onChange} checked={isChecked} />
      <label htmlFor={id} className="ml-1">{label}</label>
    </div>
  )
}

export default Radio