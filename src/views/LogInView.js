import React                    from 'react'
import { connect }              from 'react-redux'
import { Link }                 from 'react-router'

import { setDocumentTitle } from '../utils/viewUtils'
import actions              from '../actions'

class LogInView extends React.Component {
  render() {
    const logInForm = (
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
    )

    return (
      <div className='container'>
        <main>
          <h1>
            Log in
          </h1>

          {logInForm}

          <Link to="/sign_up">Create new account</Link>
        </main>
      </div>
    )
  } // end render


  // ---
  // LIFECICLE HOOKS
  // ---


  componentDidMount() {
    setDocumentTitle('Sign in')
  }


  // ---
  // PRIVATE METHODS
  // ---


  _handleSubmit(e) {
    e.preventDefault()

    const { dispatch } = this.props

    const payload = {
      email:    this.refs.email.value,
      password: this.refs.password.value,
    }

    dispatch(actions.logIn(payload))
  }

  _renderError() {
    const { error } = this.props

    if (!error) { return false }

    return (
      <div className="error">
        {error}
      </div>
    )
  }
}


// ---
// CONNECT TO STORE
// ---


const mapStateToProps = (state) => {
  return state.session
}

export default connect( mapStateToProps )( LogInView );
