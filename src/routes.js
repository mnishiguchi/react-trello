import React                  from 'react'
import { IndexRoute, Route }  from 'react-router'

// Layouts
import MainLayout from './layouts/MainLayout'

// Containers
import AuthenticatedContainer from './containers/AuthenticatedContainer'

// Views
import HomeView   from './views/HomeView'
import SignUpView from './views/SignUpView'
import LogInView  from './views/LogInView'
import BoardView  from './views/BoardView'
import CardView   from './views/CardView'

// Here, we create the MainLayout component that wraps our application inside,
// and define routes.
const routes = (
  <Route component={MainLayout}>
    <Route path="/sign_up" component={SignUpView} />
    <Route path="/log_in" component={LogInView} />

    <Route path="/" component={AuthenticatedContainer}>
      <IndexRoute component={HomeView} />

      <Route path="/boards/:id" component={BoardView}>
        <Route path="/cards/:id" component={CardView} />
      </Route>
    </Route>
  </Route>
)

export default routes
