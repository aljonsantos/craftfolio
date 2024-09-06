import { useState } from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

const EditorPanel = () => {
  const [content, setContent] = useLocalStorageState('content', { value: 'hello world' })
  const [open, setOpen] = useState(false)
  
  const handleChange = (e) => {
    setContent({ value: e.target.value })
    document.getElementById('previewer').contentWindow.location.reload()
  }

  return (
    <>
      {open && <div className='overlay bg-black opacity-50 fixed inset-0 z-10 lg:hidden' onClick={() => setOpen(!open)}></div>}
      <div className={`editor-panel ${ open ? 'open' : '' } border-solid border border-gray-300 rounded-t-2xl shadow-2xl shadow-black bg-white z-20 lg:w-[250px] bg-red-100 lg:shadow-none lg:rounded-none lg:rounded-r-2xl`}>
        <div className="panel-header h-14 flex justify-between items-center px-3 sticky top-0 w-full overflow-hidden">
          <h2 className="font-bold">Craftfolio</h2>
          <button className='toggle' onClick={() => setOpen(!open)}>
            <svg className={`w-6 h-6 text-black ${ open ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
            </svg>
          </button>
        </div>
        <div className='panel-body overflow-y-scroll'>
          {/* <input type="text" value={content.value} onChange={handleChange} /> */}
        </div>
      </div>
    </>
  )
}

export default EditorPanel

