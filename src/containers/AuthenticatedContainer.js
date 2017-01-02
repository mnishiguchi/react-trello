import React            from 'react'
import { connect }      from 'react-redux'
import { routeActions } from 'react-router-redux'

import actions from '../actions'

// Components
import AppHeader from '../components/AppHeader/AppHeader'

class AuthenticatedContainer extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />

        {this.props.children}
      </div>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  // Check if the jwt token is present in the browsers local storage.
  // If it does not exist, user will be redirected to the sign up page.
  // ---
  // TODO: Use guardian_db instead of localStorage
  // http://disq.us/p/16vnine
  // https://github.com/hassox/guardian_db
  // https://github.com/ueberauth/guardian#plug-api
  componentDidMount() {
    const { dispatch, currentUser } = this.props

    const auth = window.localStorage.getItem('phoenixAuthToken')

    if (!auth) {
      dispatch(routeActions.push('/log_in'))
      return
    }

    if (!currentUser) {
      dispatch(actions.setCurrentUser())
    }
  }
} // end class


// ---
// CONNECT TO STORE
// ---


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  }
}

export default connect( mapStateToProps )( AuthenticatedContainer )
