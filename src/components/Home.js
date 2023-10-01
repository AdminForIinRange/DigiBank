import React from 'react'
import NavBar from './NavBar'
import MainTitle from './MainTitle.js'

import './home.css'

import VennDiagram from './vennDiagram'
import Login from './Login.js'
export default function Home() {
  return (
    <div className='home' >
       
        <VennDiagram />
        <MainTitle />
        <NavBar />
        <Login />


    </div>
  )
}
