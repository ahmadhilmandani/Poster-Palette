import logo from "../../assets/logo.svg"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconMenu2 } from "@tabler/icons-react"
import MobileSubMenu from "./components/mobileSubMenu"
import { useState } from "react"


export default function Navbar() {
  const url = useLocation()
  const [isSubMenuClicked, setIsSubMenuClicked] = useState(false)
  return (
    <>
      <nav className="fixed z-40 top-0 left-0 right-0 w-full shadow-xl h-20 py-3 px-3 xl:px-20 lg:px-10 flex justify-between items-center bg-brown-50">
        <img src={logo} alt="" className="w-[120px]" />
        <div className="hidden lg:flex justify-between xl:gap-20 lg:gap-10 text-base">
          <Link to={'/'} className={`${url.pathname === '/' && 'bg-brown-200 px-3 py-1 rounded-full font-black'}`}>Home</Link>
          <Link to={'/'}>Katalog poster Kami</Link>
          <Link to={'/'}>Pesan Desain Poster</Link>
          <Link to={'/'}>Perjalanan Kami</Link>
        </div>
        <Link to={'/'} className="hidden lg:block hover:border-b-0 hover:opacity-90 text-sm text-center px-10 py-2 bg-emerald-950 text-brown-300 font-medium rounded-md">Login</Link>
        <IconMenu2 className="lg:hidden" onClick={() => setIsSubMenuClicked(!isSubMenuClicked)} />
      </nav>
        {isSubMenuClicked && <MobileSubMenu isSubMenuClicked={isSubMenuClicked} setIsSubMenuClicked={setIsSubMenuClicked} />}
    </>
  )
}