import { routeAction }  from 'react-router-redux'

import { httpDelete }   from '../utils/httpUtils'


const logOut = () => {
  return dispatch => {
    httpDelete('/api/v1/sessions')
    .then((data) => {
      localStorage.removeItem('phoenixAuthToken')

      dispatch({
        type: 'LOG_OUT',
      })

      dispatch(routeAction.push('/log_in'))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export default logOut
