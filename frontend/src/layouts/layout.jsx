import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../utils/storage";

export const StorageContext = React.createContext();

export default function Layout() {

  const [localStorageState, setLocalStorageState] = useState({})

  useEffect(() => {
    setLocalStorageState(getLocalStorage())
  }, [])

  useEffect(() => {
    console.log(localStorageState)
  }, [localStorageState])


  return (
    <StorageContext.Provider value={localStorageState}>
      <div className="w-full min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </StorageContext.Provider>
  )
}