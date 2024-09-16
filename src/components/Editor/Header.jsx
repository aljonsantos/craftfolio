import { IconExpand, IconContract } from "../Common/Icons"

const Header = ({ fullScreenView, toggleFullScreenView }) => {
  return (
    <div className={`header ${fullScreenView ? 'transparent border-none shadow-none' : 'bg-white'} px-5 py-4 border-solid border-b border-zinc-300 rounded-b-2xl shadow-2xl lg:shadow-none lg:border-none`}>
      <div className="flex justify-between items-center max-w-[500px] md:max-w-[700px] lg:max-w-full mx-auto">
        <div className="content">
          <h1 className="text-2xl font-bold">Preview</h1>
          <p className="text-xs">me.com</p>
        </div>
        <button className={`text-zinc-500 border-solid border border-zinc-300 p-2 rounded-2xl bg-white  hover:bg-zinc-200 hover:text-zinc-700 hover:border-zinc-400 ${fullScreenView ? 'shadow-lg' : ''} transition-all`} onClick={toggleFullScreenView} >
          {fullScreenView ? <IconContract /> : <IconExpand />}
        </button>
      </div>
    </div>
  )
}

export default Header
