import { useState } from "react";
import InputString from "../../components/input/InputString";
import { Link } from "react-router-dom";
import headerImg from "../../assets/hero-img.png"
import axios from "axios";
import { setLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const Navigate = useNavigate()

  const handleLogin = () => {
    setLoading(true)
    const requestData = new URLSearchParams();
    requestData.append('email', email);
    requestData.append('password', password);

    axios.post('http://localhost:3000/auth/login', requestData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((res) => {
      setLocalStorage(res.data.data[0].email, res.data.data[0].username, res.data.data[0].address)
      Navigate('/')
      window.location.reload();
    }).catch((err) => {
      Navigate('/login')
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
            <div className="border-b border-brown-400 px-5 py-3 font-bold text-center w-full">Login</div>
            <div className="mt-4">
              <InputString type={'email'} placeholder={'Masukkan Email anda'} setValue={setEmail} />
              <InputString type={'password'} placeholder={'Masukkan Password anda'} setValue={setPassword} setIsPasswordVisible={setIsPasswordVisible} isPasswordVisible={isPasswordVisible} />
              <button className="block w-full py-4 rounded-lg mt-6 bg-emerald-950 text-brown-300" onClick={() => {
                handleLogin()
              }}>
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
    </>
  )
}