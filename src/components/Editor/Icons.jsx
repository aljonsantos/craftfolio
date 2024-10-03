export const IconArrowUp = ({ size = 24, stroke = 1.5, flip = false }) => {
  return (
    <svg className={`icon arrow-up flippable ${flip ? 'flip' : ''}`} width={`${size}px`} height={`${size}px`}  fill="none" strokeWidth={stroke} stroke="currentColor" viewBox={`0 0 24 24`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    </svg>
  )
}

export const IconExpand = ({ size = 20 }) => {
  return (
    <svg className="icon expand" width={`${size}px`} height={`${size}px`} fill="none" strokeWidth={1.8} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  )
}

export const IconContract = ({ size = 20  }) => {
  return (
    <svg className="icon contract" width={`${size}px`} height={`${size}px`} fill="none" strokeWidth={1.8} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
    </svg>
  )
}

export const IconDownload = ({ size = 20 }) => {
  return (
    <svg className="icon contract" width={`${size}px`} height={`${size}px`} fill="none" strokeWidth={1.8} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}

export const IconThreeDotLoader = ({ size = 24 }) => (
  <svg className="icon loader-three-dot" width={`${size}px`} height={`${size}px`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`
        .spinner_S1WN {
          animation: spinner_MGfb .8s linear infinite;
          animation-delay: -.8s;
        }
        .spinner_Km9P {
          animation-delay: -.65s;
        }
        .spinner_JApP {
          animation-delay: -.5s;
        }
        @keyframes spinner_MGfb {
          93.75%, 100% {
            opacity: .2;
          }
        }
      `}
    </style>
    <circle className="spinner_S1WN" cx="4" cy="12" r="3" />
    <circle className="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3" />
    <circle className="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3" />
  </svg>
)