import { useState } from "react";
import InputString from "../../components/input/InputString";
import { Link } from "react-router-dom";
import headerImg from "../../assets/hero-img.png"

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className="w-full h-screen flex justify-center items-center bg-brown-50 mt-20">
      <div className="rounded-md bg-white max-w-[800px] w-full min-h-[560px] flex justify-center shadow-xl p-10 gap-x-32">
        <div className="w-1/2">
          <div className="border-b border-brown-400 px-5 py-3 font-bold text-center w-full">Login</div>
          <div className="mt-4">
            <InputString type={'email'} placeholder={'Masukkan Email anda'} />
            <InputString type={'password'} placeholder={'Masukkan Password anda'} setIsPasswordVisible={setIsPasswordVisible} isPasswordVisible={isPasswordVisible} />
            <button className="block w-full py-4 rounded-lg mt-6 bg-emerald-950 text-brown-300">
              Login
            </button>
            <p className="mt-10">Belum punya akun? <Link to={'/sign-up'} className="text-brown-400">Daftar disini!</Link></p>
          </div>

        </div>
        <div className="w-1/2 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${headerImg})` }}>
          </div>
        </div>
      </div>
    </div>
  )
}