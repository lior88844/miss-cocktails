import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
export default function AppHeader() {
  return (
    <header className="app-header banner">
      <section className="container flex">
        <section className="logo flex">
          <img src={Logo} />
          <h2>Miss - Cocktails</h2>
        </section>
        <nav className="nav-bar flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/customer">Customers</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </nav>
        <section className="loginSignup">
          <NavLink to="/signup">Signup</NavLink>
        </section>
      </section>
    </header>
  )
}
