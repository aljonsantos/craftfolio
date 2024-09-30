import { useState } from 'react'
import Section from './Section'
import { IconArrowRightCircle, IconExclamationCircle } from './Icons'

const Input = ({ type, id, name, placeholder, value, onChange, error, onTouch, touched }) => {
  
  return (
    <div className="w-full relative">
      <input className="w-full p-3 rounded-xl bg-background border border-border/10 focus:outline-0 focus:border-accent-200 text-content peer"
        type={type} id={id} name={name} value={value} onChange={onChange} onKeyDown={onTouch} autoComplete="on"
      />
      <label htmlFor={id} className={`absolute -translate-y-1/2 ${value ? 'bg-accent-200 top-0 left-2 text-xs px-2 text-content' : 'left-3 top-1/2'} text-accent-700 rounded-full peer-focus:bg-accent-200 peer-focus:top-0 peer-focus:left-2 peer-focus:text-xs peer-focus:px-2 peer-focus:text-content transition-all`}>{placeholder}</label>
      {error && touched && <IconExclamationCircle classes="absolute right-3 top-1/2 -translate-y-1/2 text-red-500/80" />}
    </div>
  )
}

const Textarea = ({ id, name, placeholder, value, onChange, error, onTouch, touched }) => {
  return (
    <div className="w-full relative">
      <textarea className="w-full h-32 min-h-min max-h-60 p-3 rounded-xl bg-background border border-border/10 focus:outline-0 focus:border-accent-200 text-content whitespace-pre peer"
        id={id} name={name} value={value} onChange={onChange} onKeyDown={onTouch}
      />
      <label htmlFor={id} className={`absolute ${value ? 'bg-accent-200 top-0 left-2 -translate-y-1/2 text-xs px-2 text-content' : 'left-3 top-3'} text-accent-700 rounded-full peer-focus:bg-accent-200 peer-focus:top-0 peer-focus:left-2 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:px-2 peer-focus:text-content transition-all`}>{placeholder}</label>
      {error && touched && <IconExclamationCircle classes="absolute right-3 top-6 -translate-y-1/2 text-red-500/80" />}
    </div>
  )
}


const Contact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [error, setError] = useState({
    name: true,
    email: true,
    message: true
  })

  const [touch, setTouch] = useState({
    name: false,
    email: false,
    message: false
  })

  const validatetor = {
    name: (v) => !v,
    email: (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    message: (v) => !v
  }

  const handleTouch = (e) => {
    const { name } = e.target
    setTouch({ ...touch, [name]: true })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    setError({ ...error, [name]: validatetor[name](value) })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const email = 'example@email.com'
    const message = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    const body = message.replace(/\n/g, '%0D%0A')
    
    if (Object.values(error).some(e => e)) return

    window.open(`mailto:${email}?subject=Contact&body=${body}`)
  }

  return (
    <Section title="Contact" classes="nav-section">
      <div className="@container">
        <p className="lg:text-lg text-content-700 mb-5 lg:mb-7 lg:ml-1">Contact Form</p>
        <form className="flex flex-col gap-5 @md:gap-7" onSubmit={handleSubmit}>
          <div className="flex flex-col @md:flex-row @md:justify-between gap-5 @lg:gap-7">
            <Input type="text" id="name" name="name" placeholder="Name" value={data.name} error={error.name} touched={touch.name} onChange={handleChange} onTouch={handleTouch}/>
            <Input type="email" id="email" name="email" placeholder="Email" value={data.email} error={error.email} touched={touch.email} onChange={handleChange} onTouch={handleTouch}/>
          </div>
          <Textarea id="message" name="message" placeholder="Message" value={data.message} error={error.message} touched={touch.message} onChange={handleChange} onTouch={handleTouch}/>
          <button className="self-end flex items-center gap-2 bg-accent-200/70 text-accent-800 px-4 py-2 rounded-full border border-border/20 hover:border-accent-800 hover:text-accent-800 hover:bg-accent-200 active:scale-95 transition-all duration-300">
            <span>Send</span>
            <IconArrowRightCircle />
          </button>
        </form>
      </div>
    </Section>
  )
}

export default Contact