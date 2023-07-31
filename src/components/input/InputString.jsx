import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function InputString({ name, id, setValue, placeholder, type, setIsPasswordVisible = null, isPasswordVisible = null }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={`flex items-center justify-center gap-4 w-fit ${isActive === true ? 'border-b border-brown-400' : 'border-b border-b-slate-200'} max-w-[280px] w-full`}>
      <input type={`${type === 'password' ? (isPasswordVisible === true ? ('text') : ('password')) : (type)}`} name={name} id={id} placeholder={placeholder} className="block px-3 py-2 w-full border-0 outline-none bg-transparent mt-4" onChange={(e) => { setValue(e.target.value) }} onFocus={() => { setIsActive(true) }} onBlur={() => { setIsActive(false) }} />
      {type === 'password' ?
        isPasswordVisible === true ?
          <IconEye color="rgb(164,133,103)" onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
          : <IconEyeOff color="rgb(226,232,240)" onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
        :
        null
      }
    </div>
  )
}