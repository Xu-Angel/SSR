import * as React from 'react'
import { Switch, Redirect, NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { router, NestedRoute, StatusRoute } from './router'

import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

import './common/style/reset.styl'
import './common/style/app.styl'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Helmet>
          <title>This is App page</title>
          <meta name="keywords" content="React SSR" />
        </Helmet>
        {/* <ul className="nav">
          <li><NavLink to="/bar">Bar</NavLink></li>
          <li><NavLink to="/baz">Baz</NavLink></li>
          <li><NavLink to="/foo">Foo</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/top-list">TopList</NavLink></li>
        </ul> */}
        <div className="wrapper">
          <Header msg="test"/>
          <div className="container">
            <Switch>
              {
                router.map((route, i) =>
                  <NestedRoute key={i} {...route} />
                )
              }
              <StatusRoute code={404}>
                <div>
                  <h1>Not Found</h1>
                </div>
              </StatusRoute>
            </Switch>
          </div>
          <Footer msg="test"/>
        </div>
      </div>
    )
  }
}

export default App
