import React from 'react'
import "./MainTitle.css"

export default function MainTitle() {
  return (
    <div className='MainTitle'>
      <div className='Digital'>
        <h1 className='animate__animated animate__slideInLeft animate__slower animate__delay-500ms '>Digital</h1>
      </div>
      <div className='Finance'>
        <h1 className='animate__animated animate__slideInLeft animate__slower animate__delay-500ms'>Finance.</h1>
      </div>
    </div>
  )
}

