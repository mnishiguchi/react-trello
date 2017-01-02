import { push }                   from 'react-router-redux'

import { setAuthToken } from '../utils/viewUtils'
import { httpPost }     from '../utils/httpUtils'

const apiRootUrl = 'https://phoenix-trello.herokuapp.com'


/**
 * Sends a POST request to the application server with the sign up form
 * submission data.
 * @param  {Object} key-value pairs from the sign up form
 */
const signUp = (signUpFormInput) => {
  const url = `${apiRootUrl}/api/v1/registrations`

  return dispatch => {
    httpPost(url, { user: signUpFormInput })
    .then(data => {
      // Store the JWT in the local storage.
      setAuthToken(data.jwt)

      dispatch({
        type       : 'SET_CURRENT_USER',
        currentUser: data.user
      })

      // Dispatch for redirecting the user to '/'.
      dispatch(push('/'))
    })
    .catch(error => {
      error.response.json()
      .then(errorJSON => {
        dispatch({
          type  : 'REGISTRATON_ERROR',
          errors: errorJSON.errors
        })
      })
    })
  }
}

export default signUp
