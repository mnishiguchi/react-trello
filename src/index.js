import React, { PropTypes as T }  from 'react'
import ReactDOM                   from 'react-dom'
import { Provider }               from 'react-redux'
import { Router, browserHistory}  from 'react-router'
import { syncHistoryWithStore }   from 'react-router-redux'
import invariant                  from 'invariant'

import configureStore  from './store'
import configureRoutes from './routes'

const store   = configureStore(browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

// Global styles
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'


// ---
// CONFIGURE ROOT NODE
// ---


class Root extends React.Component {

  static propTypes = {
    routerHistory: T.object.isRequired,
    store:         T.object.isRequired
  }

  render() {
    const { routerHistory, store } = this.props

    invariant(
      routerHistory,
      '<Root /> needs either a routingContext or routerHistory to render.'
    )

    return (
      <Provider store={store}>
        <Router history={routerHistory}>
          {configureRoutes(store)}
        </Router>
      </Provider>
    )
  }
}


// ---
// START UP
// ---


ReactDOM.render(
  <Root
    routerHistory={history}
    store={store}
  />,
  document.querySelector('#root')
)
