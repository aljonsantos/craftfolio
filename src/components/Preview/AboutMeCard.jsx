import { useState } from 'react'
import { IconArrowUp, IconGithub, IconLinkedIn, IconTwitterX, IconInstagram, IconFacebook } from '../Common/Icons'

const Social = ({ link, children }) => {
  return (
    <a href={link} className="border border-transparent p-1 rounded-lg text-accent-700/80 hover:text-accent-700 hover:bg-accent/10 hover:border-accent-300/20 hover:shadow-sm transition-all">
      {children}
    </a>
  )
}

const Socials = () => {
  return (
    <div className="flex items-center gap-1">
      <Social link=""><IconGithub /></Social>
      <Social link=""><IconLinkedIn /></Social>
      <Social link=""><IconTwitterX /></Social>
      <Social link=""><IconInstagram /></Social>
      <Social link=""><IconFacebook /></Social>
    </div>
  )
}

const Contact = ({ title, info }) => {
  return (
    <div className="bg-accent/10 w-max px-3 py-1 rounded-xl border border-accent-300/20 lg:py-2">
        <p className="text-accent-800 text-xs font-semibold lg:mb[2px]">{title}</p>
        <p className="text-accent-700 text-sm">{info}</p>
    </div>
  )
}

const Contacts = ({ show }) => {
  const transitionClass = `transition-all duration-300 md:duration-0 ${show ? 'max-h-full opacity-100 mt-3 md:mt-0' : 'max-h-0 opacity-0'}`
  return (
    <div className={`border border-accent-100/70 md:border-0 md:border-t rounded-3xl shadow-lg md:shadow-none md:rounded-none md:max-h-full md:opacity-100 ${transitionClass}`}>
      <div className={`contacts overflow-x-scroll flex flex-wrap gap-3 px-3  md:py-4 md:mt-0 md:max-h-full md:opacity-100 lg:p-4 ${transitionClass}`}>
        <Contact title="Email" info="example@email.com" />
        <Contact title="Phone" info="+1 234 567 890" />
        <Contact title="Location" info="City" />
      </div>
      <div className={`p-3 border-t border-accent-100/70 md:max-h-full md:opacity-100 lg:p-4 lg:py-3 ${transitionClass}`}>
        <Socials />
      </div>
    </div>
  )
}

const AboutMeCard = () => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <div className="aboutme-card md:bg-background-700 flex flex-col gap-1 md:border border-accent-100 md:rounded-3xl md:gap-0 md:sticky md:top-[70px] md:shadow-lg lg:shadow-2xl">
      <div className="md:p-3 lg:p-4">
        <img src="/images/profile.jpg" className="rounded-3xl w-full mb-3 shadow-lg md:mb-0 border border-accent-100"/>
      </div>
      <div>
        <p className="text-accent-800 font-bold text-[28px] leading-8 mb-1 md:p-4 md:py-2 md:m-0 lg:p-4s lg:pt-0 lg:pb-2">Alex Devsmith</p>
        <div className="flex items-center gap-2 md:px-3 lg:p-4 lg:pt-0">
          <p className="text-sm border border-solid border-accent-300/20 bg-accent/30 text-accent-700 px-2 rounded-3xl shadow-sm shadow-accent/30 md:mb-4 lg:mb-0 lg:px-3 lg:py-1">Software Developer</p>
          <button className='bg-accent/30 text-accent-700 rounded-full border border-accent-300/20 p-[2px] shadow md:hidden' onClick={() => setShowContacts(!showContacts)}>
            <IconArrowUp size={16} stroke={1.8} flip={showContacts} />
          </button>
        </div>
      </div>
      <Contacts show={showContacts} />
    </div>
  )
}

export default AboutMeCard