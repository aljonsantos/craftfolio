import { useState, useEffect } from 'react'

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

const Checkbox = ({ id, name, value, label, isChecked, isDisabled, onChange, indent = 0 }) => {
  return (
    <div className={`flex items-center gap-1 ${ getIndentClass(indent) }`}>
      <input id={id} type="checkbox" name={name} value={value} className="w-[1em] h-[1em] accent-black" checked={isChecked} disabled={isDisabled} onChange={onChange} />
      <label htmlFor={id} className="ml-1">{label}</label>
    </div>
  )
}

const Collapsible = ({ headerEl, type, toggleLabel, children }) => {
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
          <svg className={`w-4 h-4 ${ expanded ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
          </svg>
        </button>
      </div>
      <div className={`collapse-body h-0 opacity-0 overflow-hidden flex flex-col gap-4 border-b border-b-transparent transition-all ${ expanded ? 'h-auto pt-5 pb-4 opacity-100 border-b-zinc-200' : '' }`}>
        {children}
      </div>
    </div>
  )
}

const editorInputs = {
  pageType: [
    { id: 'single', value: 'single', label: 'Single Page' },
    { id: 'multi', value: 'multi', label: 'Multi Page' }
  ],
  aboutSections: [
    { id: 'education', value: 'education', label: 'Education' },
    { id: 'experience', value: 'experience', label: 'Experience' },
    { id: 'tech-skills', value: 'tech-skills', label: 'Technical Skills' },
    { id: 'soft-skills', value: 'soft-skills', label: 'Soft Skills' },
    { id: 'certs', value: 'certs', label: 'Certifications' }
  ],
  layouts: {
    projects: [
      { id: 'lay-ls-projects', value: 'list', label: 'List' },
      { id: 'lay-ca-projects', value: 'cards', label: 'Cards' }
    ],
    blog: [
      { id: 'lay-ls-blog', value: 'list', label: 'List' },
      { id: 'lay-ca-blog', value: 'cards', label: 'Cards' }
    ]
  }
}

const Color = ({ color, onChange }) => {
  const [hue, setHue] = useState(color.accent)

  useEffect(() => {
    document.body.style.setProperty('--clr-accent', `${color.accent}deg, 50%, 40%`)
  }, [color.accent])

  const handleHueChange = (e) => {
    const hue = e.target.value
    onChange(hue)
    setHue(hue)
  }

  return (
    <div className="section-body flex gap-5 lg:flex-col lg:gap-4">
      <Radio id="clr" name="color" value="default" label="Default" isChecked={color.value === 'default'} onChange={(e) => onChange(e.target.value)} />
      <Collapsible headerEl={<Radio id="clr-accent" name="color" value="accent" label="Accent" isChecked={color.value === 'accent'} onChange={(e) => onChange(e.target.value)} />} type="input" toggleLabel="custom" >
        <div className="w-[90%] pl-6">
          <div className="w-full h-2 rounded-full" style={{
            background: "linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)"
          }} />
          <input id="hue" type="range" max="360" value={hue} onChange={handleHueChange} className="w-full relative -top-3 accent-accent appearance-none bg-transparent hover:accent-accent focus:accent-accent"/>
        </div>
      </Collapsible>
    </div>
  )
}

const EditorPanel = ({ content, onUpdateContent }) => {
  const [open, setOpen] = useState(false)
 
  const handlePageTypeChange = (e) => {
    onUpdateContent('page', e.target.value)
  }

  const handlePageChange = (e) => {
    const { name, checked } = e.target
    onUpdateContent(`pages.${name}.enabled`, checked)
  }

  const handleAboutSectionChange = (e) => {
    const { checked, value } = e.target
    const { sections } = content.pages.about
    const updatedSections = checked ? [...sections, value] : sections.filter(section => section !== value)
    onUpdateContent('pages.about.sections', updatedSections)
  }

  const handleLayoutChange = (e) => {
    const { name, value } = e.target
    onUpdateContent(`pages.${name}.layout`, value)
  }

  const handleColorChange = (value) => {
    if (value === 'default' || value === 'accent') {
      onUpdateContent(`color.value`, value)
    } else {
      onUpdateContent('color.accent', value)
    }
  }

  // console.log(content)

  return (
    <>
      <div className={`overlay bg-black fixed inset-0 transition-opacity lg:hidden ${open ? 'translate-y-0 opacity-60' : '-translate-y-full opacity-0'}`} onClick={() => setOpen(false)} />
      <div className={`editor-panel ${ open ? 'open' : '' } border-solid border border-b-0 border-zinc-300 rounded-t-2xl pb-2 shadow-2xl shadow-black bg-white lg:w-[250px] lg:border lg:shadow-none lg:rounded-none lg:rounded-r-2xl transition-all duration-300`}>
        <div className="panel-header max-w-[500px] md:max-w-[700px] mx-auto h-14 flex justify-between items-center px-5 lg:pl-8 sticky top-0 w-full border-b overflow-hidden">
          <h2 className="font-bold">Craftfolio</h2>
          <button className='toggle' onClick={() => setOpen(!open)}>
            <svg className={`w-6 h-6 text-black ${ open ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
            </svg>
          </button>
        </div>
      <div className="panel-body max-w-[500px] md:max-w-[700px] mx-auto text-sm overflow-y-scroll">
        <div className="section py-4 px-5 pr-3 lg:pl-8 border-b">
          <h3 className="text-zinc-400 font-semibold uppercase mb-5">Navigation</h3>
          <div className="section-body flex gap-5 lg:flex-col lg:gap-4">
            {editorInputs.pageType.map(input => (
              <Radio key={input.id} id={input.id} name="page" value={input.value} label={input.label} isChecked={content.page === input.id} onChange={handlePageTypeChange} />
            ))}
          </div>
        </div>
        <div className="section py-4 px-5 pr-3 lg:pl-8 border-b">
          <h3 className="text-zinc-400 font-semibold uppercase mb-5">Pages & Layout</h3>
          <div className="section-body flex flex-col gap-4">
            <Collapsible headerEl={<Checkbox id="about" name="about" value="about" label="About" isChecked={true} isDisabled={true} />} type="input" toggleLabel="sections" >
              {editorInputs.aboutSections.map(input => (
                <Checkbox key={input.id} id={input.id} name={input.id} value={input.value} label={input.label} isChecked={content.pages.about.sections.includes(input.id)} onChange={handleAboutSectionChange} indent={1} />
              ))}
            </Collapsible>
            <Collapsible headerEl={<Checkbox id="projects" name="projects" value="projects" label="Projects" isChecked={content.pages.projects.enabled} onChange={handlePageChange} />} type="input" toggleLabel="layout" >
              {editorInputs.layouts.projects.map(input => (
                <Radio key={input.id} id={input.id} name="projects" value={input.value} label={input.label} isChecked={content.pages.projects.layout === input.value} onChange={handleLayoutChange} indent={1} />
              ))}
            </Collapsible>
            <Collapsible headerEl={<Checkbox id="blog" name="blog" value="blog" label="Blog" isChecked={content.pages.blog.enabled} onChange={handlePageChange} />} type="input" toggleLabel="layout" >
              {editorInputs.layouts.blog.map(input => (
                <Radio key={input.id} id={input.id} name="blog" value={input.value} label={input.label} isChecked={content.pages.blog.layout === input.value} onChange={handleLayoutChange} indent={1} />
              ))}
            </Collapsible>
            <Checkbox id="contact" name="contact" value="contact" label="Contact" isChecked={content.pages.contact.enabled} onChange={handlePageChange} />
          </div>
        </div>
        <div className="section py-4 px-5 pr-3 lg:pl-8">
          <Collapsible headerEl={<h3 className="text-zinc-400 font-semibold uppercase">Colors</h3>}>
            <Color color={content.color} onChange={handleColorChange} />
          </Collapsible>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditorPanel
