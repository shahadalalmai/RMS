import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/reports">Reports</Link>
    <Link to="/actions">Actions</Link>
    <Link to="/profile">Profile</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>RMS&nbsp;</h1><Link to="/"><img src="https://image.flaticon.com/icons/png/128/1152/1152850.png" alt="" width="75" height="70" /></Link> 
    <nav>
      { user && <span>Welcome, {user.name}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
