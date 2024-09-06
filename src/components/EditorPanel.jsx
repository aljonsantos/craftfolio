import { useState } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

const Radio = ({ id, name, value, label, onChange, indent }) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']

  return (
    <div className={`flex items-center gap-1 ${ indentValue[indent] }`}>
      <input id={id} type="radio" name={name} value={value} className="w-4 h-4 accent-black"/>
      <label htmlFor={id} className="ml-1">{label}</label>
    </div>
  )
}

const Checkbox = ({ id, name, value, label, onChange, indent }) => {
  const indentValue = ['', 'pl-6', 'pl-12', 'pl-18']

  return (
    <div className={`flex items-center gap-1 ${ indentValue[indent] }`}>
      <input id={id} type="checkbox" name={name} value={value} className="w-[1em] h-[1em] accent-black" />
      <label htmlFor={id} className="ml-1">{label}</label>
    </div>
  )
}

const Collapsible = ({ headerEl, toggleLabel, children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="collapsible">
      <div className="flex">
        {headerEl}
        <button className="text-[11px] text-zinc-700 uppercase bg-zinc-100 pl-2 pr-1 rounded-xl flex items-center gap-1 border ml-2 hover:bg-zinc-200 hover:text-zinc-900 hover:border-zinc-400 transition-all" onClick={() => setExpanded(!expanded)}>
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

const EditorPanel = () => {
  const [content, setContent] = useLocalStorageState('content', { value: 'hello world' })
  const [open, setOpen] = useState(false)
  
  const handleChange = (e) => {
    setContent({ value: e.target.value })
    document.getElementById('previewer').contentWindow.location.reload()
  }

  return (
    <>
      {open && <div className='overlay bg-black opacity-50 fixed inset-0 z-10 transition-all lg:hidden' onClick={() => setOpen(!open)}></div>}
      <div className={`editor-panel ${ open ? 'open' : '' } border-solid border border-b-0 border-zinc-300 rounded-t-2xl pb-2 shadow-2xl shadow-black bg-white z-20 lg:w-[250px] lg:border lg:shadow-none lg:rounded-none lg:rounded-r-2xl transition-all duration-300`}>
        <div className="panel-header h-14 flex justify-between items-center px-5 lg:pl-8 sticky top-0 w-full border-b overflow-hidden">
          <h2 className="font-bold">Craftfolio</h2>
          <button className='toggle' onClick={() => setOpen(!open)}>
            <svg className={`w-6 h-6 text-black ${ open ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
            </svg>
          </button>
        </div>
        <div className="panel-body text-sm overflow-y-scroll">
          <div className="section py-4 px-5 pr-3 lg:pl-8 border-b">
            <h3 className="text-zinc-400 font-semibold uppercase mb-5">Navigation</h3>
            <div className="section-body flex gap-5 lg:flex-col lg:gap-4">
              <Radio id="single" name="page" value="single" label="Single Page" />
              <Radio id="multi" name="page" value="multi" label="Multi Page" />
            </div>
          </div>
          <div className="section py-4 px-5 pr-3 lg:pl-8 ">
            <h3 className="text-zinc-400 font-semibold uppercase mb-5">Pages & Layout</h3>
            <div className="section-body flex flex-col gap-4">
              <Collapsible headerEl={<Checkbox id="about" name="about" value="about" label="About" />} toggleLabel="sections" >
                <Checkbox id="education" name="education" value="education" label="Education" indent={1} />
                <Checkbox id="experience" name="experience" value="experience" label="Experience" indent={1} />
                <Checkbox id="tskills" name="tskills" value="tskills" label="Technical Skills" indent={1} />
                <Checkbox id="sskills" name="sskills" value="sskills" label="Soft Skills" indent={1} />
                <Checkbox id="certs" name="certs" value="certs" label="Certifications" indent={1} />
              </Collapsible>
              <Collapsible headerEl={<Checkbox id="projects" name="projects" value="projects" label="Projects" />} toggleLabel="layout" >
                <Radio id="lay-ls-projects" name="lay-projects" value="list-projects" label="List" indent={1} />
                <Radio id="lay-ca-projects" name="lay-projects" value="card-projects" label="Cards" indent={1} />
                <Radio id="lay-wf-projects" name="lay-projects" value="wfall-projects" label="Waterfall" indent={1} />
              </Collapsible>
              <Collapsible headerEl={<Checkbox id="blog" name="blog" value="blog" label="Blog" />} toggleLabel="layout" >
                <Radio id="lay-ls-blog" name="lay-blog" value="list-blog" label="List" indent={1} />
                <Radio id="lay-ca-blog" name="lay-blog" value="card-blog" label="Cards" indent={1} />
                <Radio id="lay-wf-blog" name="lay-blog" value="wfall-blog" label="Waterfall" indent={1} />
              </Collapsible>
              <Checkbox id="contact" name="contact" value="contact" label="Contact" />
            </div>
          </div>
          {/* <input type="text" value={content.value} onChange={handleChange} /> */}
        </div>
      </div>
    </>
  )
}

export default EditorPanel

