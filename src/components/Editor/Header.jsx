import { useState, useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import Dropdown from './Dropdown'
import { IconExpand, IconContract, IconDownload, IconThreeDotLoader } from "./Icons"

import downloadCode from '../../services/downloadCode'

const Button = ({ classes, onClick, children }) => {
  return (
    <button className={`${classes} text-content-700 border border-border/30 p-2 rounded-2xl bg-content/[0.05] hover:bg-content-700/20 hover:text-content hover:border-border/40 hover:scale-105 active:scale-100 transition-all`} onClick={onClick} >
      {children}
    </button>
  )
}

const DropdownContentDownload = ({ isProcessing, onDownload }) => {
  const nodeLink = 'https://nodejs.org/en/download/package-manager'

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Download code</h2>
      <p className="text-sm text-content-700">Download the code as a zip file.</p>
      <p className="text-sm text-content-700 mt-4">You&apos;ll need <a href={nodeLink} className="underline underline-offset-2">Node.js</a> and <a href={nodeLink} className="underline underline-offset-2">npm</a> to run the project on your local machine.</p>
      <p className="text-sm mt-4 font-semibold mb-2">Instructions</p>
      <pre className="leading-4 text-sm border border-border/10 rounded-xl p-3 " >
        <code>
          <span className='text-content-700'>{`# Unzip the downloaded file.\n\n`}</span>
          <span className='text-content-700'>{`# Go to the project directory.\n`}</span>
          {`-> cd craftfolio\n\n`}
          <span className='text-content-700'>{`# Install the dependencies.\n`}</span>
          {`-> npm install\n\n`}
          <span className='text-content-700'>{`# Start the development server.\n`}</span>
          {`-> npm run dev\n`}
        </code>
      </pre>
      <a className="download-code flex justify-center items-center cursor-pointer w-full mt-4 text-base text-content-700 border border-border/30 p-2 rounded-2xl bg-content/[0.05] hover:bg-content-700/20 hover:text-content hover:border-border/40 transition-all"
        onClick={onDownload}
      >
        {isProcessing ? <IconThreeDotLoader /> : 'Download'}
      </a>
    </div>
  )
}

const Header = ({ content }) => {
  const { fullscreen, toggleFullScreen, activePage } = useContext(AppContext)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleDownload = async (content) => {
    if (isDownloading || isProcessing) return
    setIsProcessing(true)

    try {
      const data = await downloadCode(content)

      if (!data) {
        throw new Error('Failed to download code')
      }

      const url = window.URL.createObjectURL(new Blob([data], { type: 'application/zip' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'craftfolio.zip')
      document.body.appendChild(link)
      try {
        link.click()
      } catch (error) {
        console.error(error)
      }
        
      document.body.removeChild(link)

      setTimeout(() => {
        window.URL.revokeObjectURL(url)
      }, 300)
    } catch (error) {
      console.error(error)
    } finally {
      setIsProcessing(false)
      setIsDownloading(false)
    }
  }

  return (
    <div className={`header ${fullscreen ? 'transparent border-none shadow-none' : 'bg-background'} px-5 py-4 border-solid border border-t-0 border-border/20 rounded-b-2xl shadow-2xl lg:shadow-none lg:border-none`}>
      <div className="flex justify-between items-center max-w-[500px] md:max-w-[700px] lg:max-w-full mx-auto">
        <div className="content w-full flex items-center justify-between mr-3">
          <div>
            <h1 className="text-2xl font-bold">Preview</h1>
            <p className="text-xs text-content-700">{`example.com${content.page === 'multi' ? `/${activePage}` : '' }`}</p>
          </div>
          <div className="flex gap-3">
            <Dropdown toogleComponent={<Button><IconDownload /></Button>}>
              <DropdownContentDownload isProcessing={isProcessing} onDownload={() => handleDownload(content)} />
            </Dropdown>
          </div>
        </div>
        <Button classes="btn fullscreen" onClick={toggleFullScreen}>
          {fullscreen ? <IconContract /> : <IconExpand />}
        </Button>
      </div>
    </div>
  )
}

export default Header
