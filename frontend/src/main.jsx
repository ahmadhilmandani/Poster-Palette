import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './layouts/layout'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import CustomPosterCatalog from './pages/PosterCatalog/cutomPosterCatalog/customPosterCatalog'
import PosterDesignService from './pages/PosterDesignService/posterDesignService'
import PosterCatalog from './pages/PosterCatalog/posterCatalog'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='w-full min-h-screen bg-brown-50'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/catalog' element={<PosterCatalog />} />
            <Route path='/catalog/:id' element={<CustomPosterCatalog />} />
            <Route path='/catalog/custom-poster' element={<CustomPosterCatalog />} />
            <Route path='/order-poster' element={<PosterDesignService />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
