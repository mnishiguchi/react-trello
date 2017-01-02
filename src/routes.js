import React                  from 'react'
import { IndexRoute, Route }  from 'react-router'

import actions from './actions'

// Layouts
import MainLayout from './layouts/MainLayout'

// Containers
import PublicContainer        from './containers/PublicContainer'
import AuthenticatedContainer from './containers/AuthenticatedContainer'

// Views
import WelcomeView from './views/WelcomeView'
import SignUpView   from './views/SignUpView'
import LogInView    from './views/LogInView'

import HomeView     from './views/HomeView'
import BoardView    from './views/BoardView'
import CardView     from './views/CardView'


const confugureRoutes = (store) => {
  return (
    <Route component={MainLayout}>

      <Route component={PublicContainer}>
        <Route
          path="/welcome"
          component={WelcomeView}
        />
        <Route
          path="/sign_up"
          component={SignUpView}
        />
        <Route
          path="/log_in"
          component={LogInView}
        />
      </Route>

      <Route
        path="/"
        component={AuthenticatedContainer}
        onEnter={_ensureAuthenticated}
        >
        <IndexRoute
          component={HomeView}
        />

        <Route
          path="/boards/:id"
          component={BoardView}>
          <Route
            path="/cards/:id"
            component={CardView}
          />
        </Route>
      </Route>
    </Route>
  )

  /**
   * https://github.com/ReactTraining/react-router/blob/master/docs/API.md#onenternextstate-replace-callback
   */
  function _ensureAuthenticated(nextState, replace, callback) {
    const { dispatch }    = store
    const { session }     = store.getState()
    const { currentUser } = session

    if (!currentUser && localStorage.getItem('phoenixAuthToken')) {
      dispatch(actions.setCurrentUser())

    } else if (!localStorage.getItem('phoenixAuthToken')) {
      replace('/welcome')
    }

    callback()
  }
}

export default confugureRoutes
