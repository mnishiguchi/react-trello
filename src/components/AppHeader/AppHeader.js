import React from 'react';

// Components
import Logo    from './Logo/Logo';
import NavLink from './NavLink/NavLink';

// Styles
import './AppHeader.css';

/**
 * BS4 navbar component.
 */
const AppHeader = (props) => {
  return (
    <nav className="AppHeader navbar navbar-light bg-faded">
      <div className="navbar-brand">
        <NavLink to="/"><Logo /></NavLink>
      </div>

      <ul className="nav navbar-nav float-xs-right">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sign_up" className="nav-link">
            Sign up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/log_in" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppHeader;
