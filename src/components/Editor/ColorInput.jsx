import { useState, useEffect, useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

import Radio from './Radio'
import Collapsible from './Collapsible'

const setDefaultAccentCSSVariables = (theme) => {
  const root = document.documentElement
  if (theme === 'light') {
    root.style.setProperty('--clr-accent-100', '0deg, 0%, 88%')
    root.style.setProperty('--clr-accent-200', '0deg, 0%, 80%')
    root.style.setProperty('--clr-accent-300', '0deg, 0%, 70%')
    root.style.setProperty('--clr-accent', '0deg, 0%, 50%')
    root.style.setProperty('--clr-accent-700', '0deg, 0%, 30%')
    root.style.setProperty('--clr-accent-800', '0deg, 0%, 20%')
  } else {
    root.style.setProperty('--clr-accent-100', '0deg, 0%, 12%')
    root.style.setProperty('--clr-accent-200', '0deg, 0%, 20%')
    root.style.setProperty('--clr-accent-300', '0deg, 0%, 30%')
    root.style.setProperty('--clr-accent', '0deg, 0%, 50%')
    root.style.setProperty('--clr-accent-700', '0deg, 0%, 80%')
    root.style.setProperty('--clr-accent-800', '0deg, 0%, 90%')
  }
}

const setAccentCSSVariables = (theme, hue, lightness) => {
  const root = document.documentElement
  if (theme === 'light') {
    root.style.setProperty('--clr-accent-100', `${hue}deg, 50%, 88%`)
    root.style.setProperty('--clr-accent-200', `${hue}deg, 55%, 80%`)
    root.style.setProperty('--clr-accent-300', `${hue}deg, 57%, ${Math.min(parseInt(lightness) + 15, 95)}%`)
    root.style.setProperty('--clr-accent', `${hue}deg, 60%, ${lightness}%`)
    root.style.setProperty('--clr-accent-700', `${hue}deg, 70%, ${Math.max(parseInt(lightness) - 15, 5)}%`)
    root.style.setProperty('--clr-accent-800', `${hue}deg, 75%, ${Math.max(parseInt(lightness) - 30, 5)}%`)
  } else {
    root.style.setProperty('--clr-accent-100', `${hue}deg, 50%, 18%`)
    root.style.setProperty('--clr-accent-200', `${hue}deg, 55%, 25%`)
    root.style.setProperty('--clr-accent-300', `${hue}deg, 57%, ${Math.max(parseInt(lightness) - 15, 5)}%`)
    root.style.setProperty('--clr-accent', `${hue}deg, 60%, ${lightness}%`)
    root.style.setProperty('--clr-accent-700', `${hue}deg, 70%, ${Math.min(parseInt(lightness) + 15, 95)}%`)
    root.style.setProperty('--clr-accent-800', `${hue}deg, 75%, ${Math.min(parseInt(lightness) + 30, 95)}%`)
  }
}

const ColorRange = ({ id, min = 0, max, value, onChange, background }) => {
  return (
    <div className="w-[200px] lg:w-[90%] pl-6 h-3">
      <div className="w-full h-2 rounded-full" style={{background}} />
      <input id={id} type="range" min={min} max={max} value={value} onChange={onChange} className="appearance-none w-full relative -top-3 accent-accent bg-transparent hover:accent-accent focus:accent-accent"/>
    </div>
  )
}

export const Swatch = () => {
  return (
    <div className="flex flex-row h-4 w-max rounded-full overflow-hidden mr-2">
      <div className="w-2 rounded-full bg-accent-100" />
      <div className="w-2 rounded-full bg-accent-200" />
      <div className="w-2 rounded-full bg-accent-300" />
      <div className="w-2 rounded-full bg-accent" />
      <div className="w-2 rounded-full bg-accent-700" />
      <div className="w-2 rounded-full bg-accent-800" />
    </div>
  )
}

const ColorInput = ({ color, onChange }) => {
  const { theme } = useContext(ThemeContext)

  const [choice, setChoice] = useState(color.choice)
  const [hue, setHue] = useState(color.accent.hue)
  const [lightness, setLightness] = useState(color.accent.lightness)

  useEffect(() => {
    if (choice === 'accent') setAccentCSSVariables(theme, hue, lightness)
  }, [choice, theme, hue, lightness])

  useEffect(() => {
    if (choice === 'default') setDefaultAccentCSSVariables(theme)
  }, [choice, theme])

  const handleHueChange = (e) => {
    const value = e.target.value
    onChange({ hue: value, lightness })
    setHue(value)
  }

  const handleLightnessChange = (e) => {
    const value = e.target.value
    onChange({ hue, lightness: value })
    setLightness(value)
  }

  const handleChoiceChange = (e) => {
    const value = e.target.value
    setChoice(value)
    onChange(value)
  }

  return (
    <div className="section-body flex flex-col gap-5 lg:flex-col lg:gap-4">
      <Radio id="clr-default" name="color" value="default" label="Default" isChecked={choice === 'default'} onChange={handleChoiceChange} />
      <Collapsible headerEl={<Radio id="clr-accent" name="color" value="accent" label="Accent" isChecked={choice === 'accent'} onChange={handleChoiceChange} />} type="input" noSeparator >
        <ColorRange id="hue" max={360} value={hue} onChange={handleHueChange} 
          background={`linear-gradient(to right, #cc3333 0%, #cccc33 17%, #33cc33 33%, #33cccc 50%, #3333cc 67%, #cc33cc 83%, #cc3333 100%)`} 
        />
        <ColorRange id="lightness" min={20} max={80} value={lightness} onChange={handleLightnessChange}
          background={`linear-gradient(to right, hsl(${hue}, 60%, 20%) 0%, hsl(${hue}, 60%, 80%) 100%)`}
        />
      </Collapsible>
    </div>
  )
}

export default ColorInput