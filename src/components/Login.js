import React from 'react'
import { NavLink } from "react-router-dom";
import './Login.css'
import "./NavBar.css"
export default function Login() {
  return (
    <div className='Login'>

        
            <NavLink to='/Finance'>
            <button class="custom-gradient-button">Login With No Account</button>


            </NavLink>
            
       
    </div>
  )
}
