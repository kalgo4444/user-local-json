import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white sticky top-0 left-0 z-50">
      <nav className="container h-20 flex items-center justify-between">
        <NavLink to={'/'} className="text-4xl">
          LOGO.
        </NavLink>
      </nav>
    </header>
  )
}

export default React.memo(Header)
