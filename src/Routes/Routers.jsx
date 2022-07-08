import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { LogIn } from '../Pages/Login/LogIn'
import { Register } from '../Pages/Registrasi/Register'
import { Dashboard } from '../Pages/dashboard/Dashboard'
import { LandingPage } from '../Pages/page/LandingPage'

export const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<LogIn />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/User' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
