import { useState } from "react";
import InputString from "../../components/input/InputString";
import { Link, useNavigate } from "react-router-dom";

import headerImg from "../../assets/hero-img.png"
import axios from 'axios';

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [address, setAddress] = useState(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const Navigate = useNavigate()


  const handleSignUp = () => {
    setLoading(true)
    const requestData = new URLSearchParams();
    requestData.append('username', username);
    requestData.append('email', email);
    requestData.append('password', password);
    requestData.append('address', address);

    console.log(requestData)

    axios.post('http://localhost:3000/auth/sign-up', requestData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(() => {
      Navigate('/login')
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }


  return (
    <>
      {
        loading === true &&
        <div className="bg-white w-full min-h-screen fixed top-0 bottom-0 left-0 right-0 z-[400]">
        </div>
      }
      <div className="w-full h-screen flex justify-center items-center bg-brown-50 mt-20">
        <div className="rounded-md bg-white max-w-[800px] w-full min-h-[560px] flex justify-center shadow-xl p-10 gap-x-32">
          <div className="w-1/2">
            <div className="border-b border-brown-400 px-5 py-3 font-bold text-center w-full">Sign Up</div>
            <div className="mt-4">
              <InputString type={'text'} placeholder={'Masukkan Nama Anda'} setValue={setUsername} />
              <InputString type={'email'} placeholder={'Masukkan Email Anda'} setValue={setEmail} />
              <InputString type={'password'} placeholder={'Masukkan Password Anda'} setValue={setPassword} setIsPasswordVisible={setIsPasswordVisible} isPasswordVisible={isPasswordVisible} />
              <InputString type={'text'} placeholder={'Masukkan Alamat Lengkap Anda'} setValue={setAddress} />
              <span className="text-sm text-slate-500 mt-2 px-3">NB: digunakan untuk mengirimkan poster anda</span>
              <button className="block w-full py-4 rounded-lg mt-6 bg-emerald-950 text-brown-300" onClick={() => { handleSignUp() }}>
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