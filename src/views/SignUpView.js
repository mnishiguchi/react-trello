import React                from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'

import { setDocumentTitle, renderErrorForRef }  from '../utils/viewUtils'

import actions from '../actions'

class SignUpView extends React.Component {
  render() {
    const { errors } = this.props

    const signUpForm = (
      <form onSubmit={this._handleSubmit}>
        <div className="field">
          <input
            type="text"
            ref="first_name"
            placeholder="First name"
            required={true}
          />
          {renderErrorForRef(errors, 'first_name')}
        </div>
        <div className="field">
          <input
            type="text"
            ref="last_name"
            placeholder="Last name"
            required={true}
          />
          {renderErrorForRef(errors, 'last_name')}
        </div>
        <div className="field">
          <input
            type="email"
            ref="email"
            placeholder="Email"
            required={true}
          />
          {renderErrorForRef(errors, 'email')}
        </div>
        <div className="field">
          <input
            type="password"
            ref="password"
            placeholder="Password"
            required={true}
          />
          {renderErrorForRef(errors, 'password')}
        </div>
        <div className="field">
          <input
            type="password"
            ref="password_confirmation"
            placeholder="Confirm password"
            required={true}
          />
          {renderErrorForRef(errors, 'password_confirmation')}
        </div>

        <button type="submit">Sign up</button>
      </form>
    )

    return (
      <div className="container">
        <main>
          <h1>
            Sign up
          </h1>
          {signUpForm}

          <Link to="/log_in">Log in</Link>
        </main>
      </div>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  // Set the document title when the component is mounted.
  componentDidMount() {
    setDocumentTitle('Sign up')
  }


  // ---
  // PRIVATE METHODS
  // ---


  // Dispatches the `signUp` action with the user's inputted values.
  _handleSubmit(event) {
    event.preventDefault()

    const { dispatch } = this.props

    const payload = {
      first_name:            this.refs.first_name.value,
      last_name:             this.refs.last_name.value,
      email:                 this.refs.email.value,
      password:              this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value,
    }

    dispatch(actions.signUp(payload))
  }

} // end class


// ---
// CONNECT TO STORE
// ---


const mapStateToProps = (state) => {
  return state.registration
}

export default connect( mapStateToProps )( SignUpView )
