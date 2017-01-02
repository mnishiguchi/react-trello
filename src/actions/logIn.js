import { routeAction }  from 'react-router-redux'

import { httpPost } from '../utils/httpUtils'

const apiRootUrl = 'https://phoenix-trello.herokuapp.com'


/**
 * Sends a POST request to the application server with the log in form
 * submission data.
 * @param  {Object} key-value pairs from the log in form
 */
const logIn = (logInFormInput) => {
  return dispatch => {
    const url = `${apiRootUrl}/api/v1/sessions`

    httpPost(url, logInFormInput)
    .then(result => {
      window.localStorage.setItem('phoenixAuthToken', result.jwt)
      dispatch({
        type:       'SET_CURRENT_USER',
        currentUser: result.user
      })
      dispatch(routeAction.push('/'))
    })
    .catch(error => {
      error.response.json()
      .then(errorJSON => {
        dispatch({
          type: 'SESSION_ERROR',
          error: errorJSON.error
        })
      })
    })
  }
}

export default logIn
