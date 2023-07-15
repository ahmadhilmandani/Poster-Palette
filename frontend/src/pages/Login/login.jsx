import { useState } from "react";
import InputPassword from "../../components/input/InputPassword";
import { Link } from "react-router-dom";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="w-full h-screen flex justify-center items-center bg-emerald-950">
      <div className="rounded-md bg-white max-w-[620px] w-full h-[400px] flex justify-center items-center flex-col">
        <div className="border-b border-brown-400 px-5 py-3 font-bold text-center w-full">Login</div>
        <div className="mx-auto flex-1 mt-10">
          <InputPassword type={'email'} placeholder={'Masukkan Email anda'} />
          <InputPassword type={'password'} placeholder={'Masukkan Password anda'} setIsPasswordVisible={setIsPasswordVisible} isPasswordVisible={isPasswordVisible} />
          <p className="mt-10">Belum punya akun? <Link to={'/'}>Daftar disini!</Link></p>
        </div>
      </div>
    </div>
  )

}