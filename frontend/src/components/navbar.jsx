import logo from "../assets/logo.svg"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"


export default function Navbar() {
  const url = useLocation()
  console.log(url)
  return (
    <nav className="fixed z-40 top-0 left-0 right-0 w-full shadow-xl h-20 py-3 px-3 lg:px-20 flex justify-between items-center bg-brown-50">
      <img src={logo} alt="" className="w-[120px]" />
      <div className="flex justify-between gap-20 text-base">
        <Link to={'/'} className={`${url.pathname === '/' && 'bg-brown-200 px-3 py-1 rounded-full font-black'}`}>Home</Link>
        <Link to={'/'}>Katalog poster Kami</Link>
        <Link to={'/'}>Pesan Desain Poster</Link>
        <Link to={'/'}>Perjalanan Kami</Link>
      </div>
      <Link to={'/'} className="hover:border-b-0 hover:opacity-90 text-sm text-center px-10 py-2 bg-emerald-950 text-brown-300 font-medium rounded-md">Login</Link>
    </nav>
  )
}