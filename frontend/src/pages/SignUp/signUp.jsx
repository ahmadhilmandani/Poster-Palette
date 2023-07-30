import { useState } from "react";
import InputString from "../../components/input/InputString";
import { Link } from "react-router-dom";

import headerImg from "../../assets/hero-img.png"


export default function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-brown-50 mt-20">
        <div className="rounded-md bg-white max-w-[800px] w-full min-h-[560px] flex justify-center shadow-xl p-10 gap-x-32">
          <div className="w-1/2">
            <div className="border-b border-brown-400 px-5 py-3 font-bold text-center w-full">Sign Up</div>
            <div className="mt-4">
              <InputString type={'text'} placeholder={'Masukkan Nama Anda'} />
              <InputString type={'email'} placeholder={'Masukkan Email Anda'} />
              <InputString type={'password'} placeholder={'Masukkan Password Anda'} setIsPasswordVisible={setIsPasswordVisible} isPasswordVisible={isPasswordVisible} />
              <InputString type={'text'} placeholder={'Masukkan Alamat Lengkap Anda'} />
              <span className="text-sm text-slate-500 mt-2 px-3">NB: digunakan untuk mengirimkan poster anda</span>
              <button className="block w-full py-4 rounded-lg mt-6 bg-emerald-950 text-brown-300">
                Sign Up
              </button>
              <p className="mt-10">Sudah punya akun? <Link to={'/login'} className="text-brown-400">Login aja!</Link></p>
            </div>

          </div>
          <div className="w-1/2 rounded-xl overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${headerImg})` }}>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}