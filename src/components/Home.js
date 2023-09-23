import React from 'react'
import NavBar from './NavBar'
import MainTitle from './MainTitle.js'


import VennDiagram from './vennDiagram'
import Login from './Login.js'
export default function Home() {
  return (
    <div>
       
        <VennDiagram />
        <MainTitle />
        <NavBar />
        <Login />


    </div>
  )
}
