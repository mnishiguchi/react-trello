import React, { Proptype as T } from 'react'
import { connect }              from 'react-redux'
import { Link }                 from 'react-router'

import { setDocumentTitle } from '../lib'
import actions              from '../actions/session'

class LogInView extends React.Component {
  render() {
    return (
      <div className='LogInView view-container'>
        <main>
          <header>
            <div className="logo" />
          </header>
          <form onSubmit={e => this._handleSubmit(e)}>
            {this._renderError()}
            
            <div className="field">
              <input
                ref="email"
                type="Email"
                placeholder="Email"
                required="true"
                defaultValue="user@example.com"
              />
            </div>
            <div className="field">
              <input
                ref="password"
                type="password"
                placeholder="Password"
                required="true"
                defaultValue="password"
              />
            </div>
            <button type="submit">Sign in</button>
          </form>
          <Link to="/sign_up">Create new account</Link>
        </main>
      </div>
    )
  }
}

export default LogInView
