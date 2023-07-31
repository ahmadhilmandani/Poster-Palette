import logo from "../../assets/logo.svg"
import { Navigate, useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconMenu2, IconShoppingCart, IconUser } from "@tabler/icons-react"
import MobileSubMenu from "./components/mobileSubMenu"
import { useContext, useState } from "react"
import ButtonPrimary from "../button/buttonPrimary"
import { StorageContext } from "../../layouts/layout"
import { removeAllLocalStorage } from "../../utils/storage"

export default function Navbar() {
  const url = useLocation()
  const [isIconUserClick, setIsIconUserClick] = useState(false)
  const [isSubMenuClicked, setIsSubMenuClicked] = useState(false)
  const localStorageState = useContext(StorageContext)
  return (
    <>
      <nav className="fixed z-40 top-0 left-0 right-0 w-full shadow-xl h-20 py-3 px-3 xl:px-20 lg:px-10 flex justify-between items-center bg-brown-50">
        <img src={logo} alt="" className="w-[120px]" />
        <div className="hidden lg:flex justify-between xl:gap-20 lg:gap-10 text-base">
          <Link to={'/'} className={`${url.pathname === '/' && 'active-link hover:border-0'}`}>Home</Link>
          <Link to={'/catalog'} className={`${url.pathname.startsWith('/catalog') && 'active-link hover:border-0'}`}>Katalog poster Kami</Link>
          <Link to={'/order-poster'} className={`${url.pathname.startsWith('/order-poster') && 'active-link hover:border-0'}`}>Jasa Desain Poster</Link>
          <Link to={'/'} className={`${url.pathname === '/3' && 'active-link hover:border-0'}`}>Perjalanan Kami</Link>
        </div>
        {localStorageState !== null && localStorageState !== undefined && localStorageState !== 0 ?
          <div className="flex gap-5">
            <div className="rounded-full p-2">
              <IconShoppingCart color="#433B31" />
            </div>
            <div className="bg-emerald-950 p-2 rounded-full hover:cursor-pointer" onClick={() => { setIsIconUserClick(!isIconUserClick) }}>
              <IconUser color="#FAECB8" />
            </div>
          </div>
          :
          <Link to={'/login'} className="lg:block hidden hover:border-b-0">
            <ButtonPrimary tSize="sm" wSize="32">Login</ButtonPrimary>
          </Link>
        }
        <IconMenu2 className="lg:hidden" onClick={() => setIsSubMenuClicked(!isSubMenuClicked)} />
        {isIconUserClick === true ?
          <>
            <div className="bg-brown-200 p-5 fixed top-16 right-16 z-[500] rounded-lg shadow-xl">
              <Link to={'/profil/:id'} className="lg:block hidden">
                Profil
              </Link>
              <Link to={'/riwayat-pemesanan'} className="lg:block hidden mt-5">
                Riwayat Pemesanan
              </Link>
              <Link to={'/'} className="lg:block hidden mt-5" onClick={() => {
                removeAllLocalStorage()
                Navigate('/')
                window.location.reload();
              }}>
                Logout
              </Link>
            </div>
          </>
          :
          null
        }
      </nav>
      {isSubMenuClicked && <MobileSubMenu isSubMenuClicked={isSubMenuClicked} setIsSubMenuClicked={setIsSubMenuClicked} />}
    </>
  )
}