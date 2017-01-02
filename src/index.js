import React                    from 'react'
import ReactDOM                 from 'react-dom'

import { Provider }               from 'react-redux';
import { Router, RoutingContent } from 'react-router';
import { browserHistory }         from 'react-router'

import routes from './routes'

// Global styles
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './index.css';

const Hello = () => (<div>Hello</div>)

const node = (
  <Router history={browserHistory}>
    {routes}
  </Router>
)

ReactDOM.render(
  node,
  document.querySelector('#root')
)
