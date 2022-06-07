import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return <nav>
    <NavLink to="/home" className='nav-link'>Home</NavLink>
    <NavLink to ="/contact" className='nav-link' > Contact</NavLink>
    <NavLink to = "/blogs" className='nav-link' > Blogs </NavLink>
  </nav>
}
