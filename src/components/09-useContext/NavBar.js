import React from 'react'
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="./" className="navbar-brand">Navbar</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to="./">Home</NavLink>
                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to="./about">About</NavLink>
                    <NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to="./login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}
