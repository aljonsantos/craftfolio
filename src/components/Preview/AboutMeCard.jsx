import { useState } from 'react'

const Contact = ({ title, info }) => {
  return (
    <div className="bg-zinc-100 w-max px-3 py-1 rounded-xl border border-zinc-200">
        <p className="text-xs font-semibold">{title}</p>
        <p>{info}</p>
    </div>
  )
}

const Socials = () => {
  return (
    <div>
        <div className="flex items-center gap-1">
          <a href="">
            <svg className="w-5 h-5 text-zinc-700" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
            </svg>
          </a>
          <a href="">
            <svg className="w-6 h-6 text-zinc-700" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
            </svg>
          </a>
          <a href="">
            <svg className="w-4 h-4 text-zinc-700" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
            </svg>
          </a>
        </div>
    </div>
  )
}

const Contacts = ({ show }) => {
  const transitionClass = `transition-all duration-500 ${show ? 'max-h-full opacity-100 mt-3' : 'max-h-0 opacity-0'}`
  return (
    <div className={`overflow-hidden border border-zinc-300 rounded-3xl shadow-lg ${transitionClass}`}>
      <div className={`contacts flex flex-wrap gap-3 px-3 ${transitionClass}`}>
        <Contact title="Email" info="example@email.com" />
        <Contact title="Phone" info="+1 234 567 890" />
        <Contact title="Location" info="City" />
      </div>
      <div className={`p-3 border-t border-zinc-300 ${transitionClass}`}>
        <Socials />
      </div>
    </div>
  )
}

const AboutMeCard = () => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <div className="aboutme-card flex flex-col gap-1">
      <div className="order-2">
        <p className="font-bold text-[28px] leading-8 mb-1">Alex Devsmith</p>
        <div className="flex items-center gap-2">
          <p className="border border-solid border-zinc-300 bg-zinc-100 text-zinc-700 w-max px-2 rounded-3xl shadow">Software Developer</p>
          <button className='bg-zinc-100 rounded-full border border-zinc-300 p-[2px] shadow' onClick={() => setShowContacts(!showContacts)}>
            <svg className={`w-4 h-4 text-zinc-500 ${ showContacts ? 'flip' : '' }`} width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m5 15 7-7 7 7" />
            </svg>
          </button>
        </div>
        <Contacts show={showContacts} />
      </div>
      <img src="/images/profile.jpg" className="rounded-3xl max-w-[100%] mb-3 shadow-lg"/>
    </div>
  )
}

export default AboutMeCard