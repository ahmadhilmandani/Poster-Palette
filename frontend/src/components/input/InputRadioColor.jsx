/* eslint-disable react/prop-types */

import { IconCheck } from "@tabler/icons-react"


export default function InputRadioColor({ inputId, label, InputName, inputVal, setColorChoosed, colorChoosed }) {
  const styleData = {
    clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"
  }

  return (
    <>
      <label htmlFor={inputId} className={`block border px-6 py-1 relative ${colorChoosed === inputVal ? 'border-emerald-950' : 'border-slate-300'}`}>
        {label}

        {
          colorChoosed === inputVal &&
          <span style={styleData} className="bg-emerald-950 h-5 aspect-[32/28] absolute bottom-0 right-0">
            <IconCheck size={9} color="white" stroke={4} className="absolute bottom-[1.2px] right-[1.2px]" />
          </span>
        }
        
      </label>
      <input type="radio" id={inputId} name={InputName} value={inputVal} className="hidden"
        onClick={(e) => {
          setColorChoosed(e.target.value)
        }} />
    </>
  )
}