import React from 'react'
import { StaticRouter as Router, matchPath } from 'react-router'
import { Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import Header from './Layout/Header'

const AppRouter = () => (
  <Router context={{}}>
    <div>
      <Header />
      <Route path="/" component={LandingPage} />
    </div>
  </Router>
)

export default AppRouter
