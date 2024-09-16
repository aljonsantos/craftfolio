import { useState } from 'react'
import { IconArrowUp, IconGithub, IconLinkedIn, IconTwitterX, IconInstagram, IconFacebook } from '../Common/Icons'

const Social = ({ link, children }) => {
  return (
    <a href={link} className="border border-transparent p-1 rounded-lg text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100  hover:border-zinc-200 hover:shadow-sm transition-all">
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
    <div className="bg-zinc-100 w-max px-3 py-1 rounded-xl border border-zinc-200 lg:py-2">
        <p className="text-xs font-semibold lg:mb[2px]">{title}</p>
        <p className="text-sm">{info}</p>
    </div>
  )
}

const Contacts = ({ show }) => {
  const transitionClass = `transition-all duration-500 ${show ? 'max-h-full opacity-100 mt-3 md:mt-0' : 'max-h-0 opacity-0'}`
  return (
    <div className={`border border-zinc-300 md:border-0 md:border-t rounded-3xl shadow-lg md:shadow-none md:rounded-none md:max-h-full md:opacity-100 ${transitionClass}`}>
      <div className={`contacts overflow-x-scroll flex flex-wrap gap-3 px-3  md:py-4 md:mt-0 md:max-h-full md:opacity-100 lg:p-5 ${transitionClass}`}>
        <Contact title="Email" info="example@email.com" />
        <Contact title="Phone" info="+1 234 567 890" />
        <Contact title="Location" info="City" />
      </div>
      <div className={`p-3 border-t border-zinc-300 md:max-h-full md:opacity-100 lg:p-5 lg:py-4 ${transitionClass}`}>
        <Socials />
      </div>
    </div>
  )
}

const AboutMeCard = () => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <div className="aboutme-card flex flex-col gap-1 md:border border-zinc-300 md:rounded-3xl md:gap-0 md:sticky md:top-[70px] md:shadow-lg lg:shadow-2xl">
      <div className="order-2">
        <p className="font-bold text-[28px] leading-8 mb-1 md:p-4 md:pt-2 md:m-0 lg:p-5 lg:pt-0 lg:pb-2">Alex Devsmith</p>
        <div className="flex items-center gap-2 md:px-3 lg:p-5 lg:pt-0">
          <p className="text-sm border border-solid border-zinc-300 bg-zinc-100 text-zinc-700 px-2 rounded-3xl shadow md:mb-4 lg:mb-0 lg:px-3 lg:py-1">Software Developer</p>
          <button className='bg-zinc-100 text-zinc-500 rounded-full border border-zinc-300 p-[2px] shadow md:hidden' onClick={() => setShowContacts(!showContacts)}>
            <IconArrowUp size={16} stroke={1.8} flip={showContacts} />
          </button>
        </div>
        <Contacts show={showContacts} />
      </div>
      <div className="md:p-3 lg:p-5">
        <img src="/images/profile.jpg" className="rounded-3xl w-full mb-3 shadow-lg md:mb-0"/>
      </div>
    </div>
  )
}

export default AboutMeCard