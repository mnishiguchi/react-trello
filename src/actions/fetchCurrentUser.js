import { routeAction }  from 'react-router-redux'

import { httpGet } from '../utils/httpUtils'

const apiRootUrl = 'https://phoenix-trello.herokuapp.com'

const fetchCurrentUser = () => {
  const url = `${apiRootUrl}/api/v1/current_user`

  return dispatch => {
    httpGet(url)
    .then(data => {
      dispatch({
        type       : 'SET_CURRENT_USER',
        currentUser: data.user
      })
    })
    .catch(error => {
      console.log(error)
      dispatch(routeAction.push('/log_in'))
    })
  }
}

export default fetchCurrentUser
