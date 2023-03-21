import React from 'react'
import '../styles/header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__body">
          <nav className="header__nav">
            <h1 className='header__title'>Gallery</h1>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header