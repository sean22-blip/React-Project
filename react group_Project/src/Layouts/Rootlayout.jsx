// Rootlayout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Rootlayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Rootlayout