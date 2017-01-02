import { pushPath }               from 'react-router-redux'
import { httpPost, setAuthToken } from '../lib'

const action = {}

/**
 * Sends a POST request to the application server with the sign up form
 * submission data.
 * @param  {Object} data key-value pairs from the sign up form
 */
action.signUp = (data) => {
    const signupUrl = '/api/v1/registrations'

    return dispatch => {
        // The httpPost function is defined in `web/static/js/utils/index.js`,
        // which relies on the isomorphic-fetch package.
        // https://github.com/matthew-andrews/isomorphic-fetch
        httpPost(signupUrl, {user: data})
            // Successfully signed up.
            .then(data => {
                // Store the JWT in the local storage.
                setAuthToken(data.jwt)

                // Dispatch for setting the current user (which was null).
                dispatch({
                    type       : 'CURRENT_USER',
                    currentUser: data.user,
                })

                // Dispatch for redirecting the user to '/'.
                dispatch( pushPath('/') )
            })
            // Could not sign up due to some error.
            .catch(error => {
                error.response.json() // a promise that resolves with a JSON object
                    .then(errorJSON => {
                        // Dispatch for showing the user about the errors.
                        dispatch({
                            type  : 'REGISTRATON_ERROR',
                            errors: errorJSON.errors
                        })
                    })
            })
    } // end return
} // end action.signUp

export default action
