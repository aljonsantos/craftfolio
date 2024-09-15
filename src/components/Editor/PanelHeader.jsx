const PanelHeader = ({ open, togglePanel }) => {
  return (
    <div className="panel-header max-w-[500px] md:max-w-[700px] mx-auto h-14 flex justify-between items-center px-5 lg:pl-8 sticky top-0 w-full border-b overflow-hidden">
      <h2 className="font-bold">Craftfolio</h2>
      <button className='toggle' onClick={togglePanel}>
        <svg className={`w-6 h-6 text-black ${ open ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default PanelHeader