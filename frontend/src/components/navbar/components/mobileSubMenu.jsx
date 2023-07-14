/* eslint-disable react/prop-types */
import { IconX } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

export default function MobileSubMenu({ isSubMenuClicked, setIsSubMenuClicked }) {
  const url = useLocation()
  return (
    <div className="bg-black bg-opacity-70 w-full h-screen fixed top-0 bottom-0 right-0 left-0 z-40">
      <div className="bg-brown-50 w-[75%] h-screen fixed right-0 top-0 bottom-0 z-50 p-5">
        <IconX onClick={() => setIsSubMenuClicked(!isSubMenuClicked)} className="float-right" />
        <div className="clear-both">
          <Link to={'/'} className={`${url.pathname === '/' && 'bg-brown-200 px-3 py-1 rounded-full font-black'} block w-fit mt-16`}>Home</Link>
          <Link to={'/'} className={`${url.pathname === '/1' && 'bg-brown-200 px-3 py-1 rounded-full font-black'} block w-fit mt-8`}>Katalog poster Kami</Link>
          <Link to={'/'} className={`${url.pathname === '/2' && 'bg-brown-200 px-3 py-1 rounded-full font-black'} block w-fit mt-8`}>Pesan Desain Poster</Link>
          <Link to={'/'} className={`${url.pathname === '/3' && 'bg-brown-200 px-3 py-1 rounded-full font-black'} block w-fit mt-8`}>Perjalanan Kami</Link>
        </div>
      </div>
    </div>
  )
}