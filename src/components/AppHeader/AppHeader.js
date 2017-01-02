import React          from 'react'
import ReactGravatar  from 'react-gravatar';

import actions from '../../actions'

// Components
import Logo    from './Logo/Logo'
import NavLink from './NavLink/NavLink'

// Styles
import './AppHeader.css'


/**
 * BS4 navbar component.
 */
class AppHeader extends React.Component {
  render() {
    return (
      <nav className="AppHeader navbar navbar-light bg-faded">
        <div className="navbar-brand">
          <NavLink to="/"><Logo /></NavLink>
        </div>

        <ul className="nav navbar-nav float-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <i className="fa fa-home"/>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sign_up" className="nav-link">
              <i className="fa fa-sign-out"/>
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/log_in" className="nav-link">
              <i className="fa fa-sign-out"/>
              Log in
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  _renderCurrentUser() {
    const { currentUser } = this.props

    if (!currentUser) { return false }

    const fullName = [currentUser.first_name, currentUser.last_name].join(' ')

    return (
      <a className="current-user">
        <ReactGravatar
          email={currentUser.email}
          https
        />
        {fullName}
      </a>
    )
  }

  _renderLogOutLink() {
    if (!this.props.currentUser) {
      return false
    }

    return (
      <a href="#" onClick={e => this._handleLogOutClick(e)}>
        <i className="fa fa-sign-out"/>
        Sign out
      </a>
    )
  }

  _handleLogOutClick(e) {
    e.preventDefault()

    this.props.dispatch(actions.logOut())
  }
}

export default AppHeader
