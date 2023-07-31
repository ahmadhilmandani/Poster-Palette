import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/storage";


export default function Layout() {
  const data = "Ini adalah data dari konteks";
  const MyContext = React.createContext();

  const [localStorageState, setLocalStorageState] = useState({})

  useEffect(() => {
    setLocalStorageState(getLocalStorage())
  }, [])

  useEffect(() => {
    console.log(localStorageState)
  }, [localStorageState])


  return (
    <MyContext.Provider value={data}>
      <div className="w-full min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </MyContext.Provider>
  )
}