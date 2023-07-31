/* eslint-disable react/prop-types */

import { IconCheck } from "@tabler/icons-react"


export default function InputRadio({ inputId, children, InputName, inputVal, choosed, setChoosed }) {
  const styleData = {
    clipPath: "polygon(100% 0, 0% 100%, 100% 100%)"
  }

  return (
    <>
      <label htmlFor={inputId} className={`flex flex-col rounded-[4px] items-center border px-6 py-2 relative ${choosed === inputVal ? 'border-emerald-950' : 'border-slate-300'}`}>
        {children}

        {
          choosed === inputVal &&
          <span style={styleData} className="bg-emerald-950 h-5 aspect-[32/28] absolute bottom-0 right-0">
            <IconCheck size={9} color="white" stroke={4} className="absolute bottom-[1.2px] right-[1.2px]" />
          </span>
        }

      </label>
      <input type="radio" id={inputId} name={InputName} value={inputVal} className="hidden"
        onClick={(e) => {
          setChoosed(e.target.value)
        }} />
    </>
  )
}