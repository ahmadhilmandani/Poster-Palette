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
          <Link to={'/'} className={`${url.pathname === '/' && 'active-link hover:border-0'}`}>Home</Link>
          <Link to={'/catalog/custom-poster'} className={`${url.pathname.startsWith('/catalog') && 'active-link hover:border-0'}`}>Katalog poster Kami</Link>
          <Link to={'/'} className={`${url.pathname === '/2' && 'active-link hover:border-0'}`}>Pesan Desain Poster</Link>
          <Link to={'/'} className={`${url.pathname === '/3' && 'active-link hover:border-0'}`}>Perjalanan Kami</Link>
        </div>
        <Link to={'/login'} className="lg:button hidden hover:border-b-0 text-sm px-10 py-2">Login</Link>
        <IconMenu2 className="lg:hidden" onClick={() => setIsSubMenuClicked(!isSubMenuClicked)} />
      </nav>
        {isSubMenuClicked && <MobileSubMenu isSubMenuClicked={isSubMenuClicked} setIsSubMenuClicked={setIsSubMenuClicked} />}
    </>
  )
}