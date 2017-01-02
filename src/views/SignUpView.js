import React                from 'react'
import { connect }          from 'react-redux'
import { Link }             from 'react-router'

import { renderField } from '../utils/viewUtils'

import { setDocumentTitle, renderErrorForRef }  from '../utils/viewUtils'

import actions from '../actions'

class SignUpView extends React.Component {
  render() {
    const { errors } = this.props

    const signUpForm = (
      <form onSubmit={this._handleSubmit}>
        {renderField('first_name')}
        {renderErrorForRef(errors, 'first_name')}

        {renderField('last_name')}
        {renderErrorForRef(errors, 'last_name')}

        {renderField('email')}
        {renderErrorForRef(errors, 'email')}

        {renderField('password')}
        {renderErrorForRef(errors, 'password')}

        {renderField('password_confirmation')}
        {renderErrorForRef(errors, 'password_confirmation')}

        <button
          type="submit"
          className="btn btn-primary"
        >
          Sign up
        </button>
      </form>
    )

    return (
      <div className="container">
        <main style={{margin: '2rem 0'}}>
          <h1>
            Sign up
          </h1>

          {signUpForm}

          <div className="mt-1" />

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
