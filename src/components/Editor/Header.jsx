const Header = ({ fullScreenView, toggleFullScreenView }) => {
  return (
    <div className={`header flex justify-between items-center ${fullScreenView ? 'transparent shadow-none border-none' : 'bg-white'} px-5 py-4 border-solid border-b border-zinc-300 rounded-b-2xl shadow-2xl z-10 lg:border-none lg:shadow-none`}>
      <div className="content">
        <h1 className="text-2xl font-bold">Preview</h1>
        <p className="text-xs">me.com</p>
      </div>
      <button className={`text-zinc-500 border-solid border border-zinc-300 p-2 rounded-2xl bg-white z-60 hover:bg-zinc-200 hover:text-zinc-700 hover:border-zinc-400 ${fullScreenView ? 'shadow-lg' : ''} transition-all`} onClick={toggleFullScreenView} >
        <svg className="w-5 h-5" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"/>
        </svg>
      </button>
    </div>
  )
}

export default Header
