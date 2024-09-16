import { useState } from 'react'

import Overlay from './Overlay.jsx'
import PanelHeader from './PanelHeader.jsx'
import PanelSection from './PanelSection.jsx'
import Radio from './Radio.jsx'
import Checkbox from './Checkbox.jsx'
import Collapsible from './Collapsible.jsx'
import ColorInput from './ColorInput.jsx'

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
      <Overlay active={open} onClick={() => setOpen(false)} />
      <div className={`editor-panel ${ open ? 'open' : '' } border-solid border border-b-0 border-zinc-300 rounded-t-2xl pb-2 shadow-2xl shadow-black bg-white lg:w-[250px] lg:border lg:shadow-none lg:rounded-none lg:rounded-r-2xl transition-all duration-300`}>
        <PanelHeader open={open} togglePanel={() => setOpen(!open)} />
      <div className="panel-body max-w-[500px] md:max-w-[700px] mx-auto text-sm overflow-y-scroll">
        <PanelSection title="Navigation">
          <div className="section-body flex gap-5 lg:flex-col lg:gap-4">
            {editorInputs.pageType.map(input => (
              <Radio key={input.id} id={input.id} name="page" value={input.value} label={input.label} isChecked={content.page === input.id} onChange={handlePageTypeChange} />
            ))}
          </div>
        </PanelSection>
        <PanelSection title="Pages & Layout">
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
        </PanelSection>
        <PanelSection title="Colors" noSeparator>
          <ColorInput color={content.color} onChange={handleColorChange} />
        </PanelSection>
      </div>
    </div>
    </>
  )
}

export default EditorPanel
