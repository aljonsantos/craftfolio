import { useState, useEffect } from 'react'
import Radio from './Radio'
import Collapsible from './Collapsible'

const setCSSVariables = (hue, lightness) => {
  const root = document.documentElement
  root.style.setProperty('--clr-accent-100', `${hue}deg, 50%, 88%`)
  root.style.setProperty('--clr-accent-200', `${hue}deg, 55%, 80%`)
  root.style.setProperty('--clr-accent-300', `${hue}deg, 57%, ${Math.min(parseInt(lightness) + 15, 95)}%`)
  root.style.setProperty('--clr-accent', `${hue}deg, 60%, ${lightness}%`)
  root.style.setProperty('--clr-accent-700', `${hue}deg, 70%, ${Math.max(parseInt(lightness) - 15, 5)}%`)
  root.style.setProperty('--clr-accent-800', `${hue}deg, 75%, ${Math.max(parseInt(lightness) - 30, 5)}%`)
}

const ColorInput = ({ color, onChange }) => {
  const [hue, setHue] = useState(color.accent.hue)
  const [lightness, setLightness] = useState(color.accent.lightness)

  useEffect(() => {
    setCSSVariables(hue, lightness)
  }, [hue, lightness])

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

  return (
    <div className="section-body flex flex-col gap-5 lg:flex-col lg:gap-4">
      <Radio id="clr-default" name="color" value="default" label="Default" isChecked={color.value === 'default'} onChange={(e) => onChange(e.target.value)} />
      <Collapsible headerEl={<Radio id="clr-accent" name="color" value="accent" label="Accent" isChecked={color.value === 'accent'} onChange={(e) => onChange(e.target.value)} />} type="input" noSeparator >
        <div className="w-[200px] lg:w-[90%] pl-6 h-3">
          <div className="w-full h-2 rounded-full" style={{
            background: "linear-gradient(to right, #cc3333 0%, #cccc33 17%, #33cc33 33%, #33cccc 50%, #3333cc 67%, #cc33cc 83%, #cc3333 100%)"
          }} />
          <input id="hue" type="range" max={360} value={hue} onChange={handleHueChange} className="w-full relative -top-3 accent-accent appearance-none bg-transparent hover:accent-accent focus:accent-accent"/>
        </div>
        <div className="w-[200px] lg:w-[90%] pl-6 h-3">
          <div className="w-full h-2 rounded-full" style={{
            background: `linear-gradient(to right, hsl(${hue}, 60%, 20%) 0%, hsl(${hue}, 60%, 80%) 100%)`
          }} />
          <input id="lightness" type="range" min={20} max={80} value={lightness} onChange={handleLightnessChange} className="w-full relative -top-3 accent-accent appearance-none bg-transparent hover:accent-accent focus:accent-accent"/>
        </div>
      </Collapsible>
    </div>
  )
}

export default ColorInput