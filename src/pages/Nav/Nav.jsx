import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import home from '../../img/home.png'

export const Nav = () => {
  return (
    <nav className='nav-cont'>
        <div className='cont-log'>
            <img src={home} alt="" />
            <h3>Housing App</h3>
        </div>
        <div className='cont-btns'>
                <Link to="/login" className="btn btn-warning">Login</Link>
                <Link to="/signup" className=" btn btn-secondary">Sign Up</Link>
        </div>
    </nav>
  )
}
