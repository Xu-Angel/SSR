import * as React from 'react'
import { Helmet } from 'react-helmet'
import './home.styl'
class Bar extends React.Component {
  public render() {
    return (
      <div>
        <Helmet>
          <title>奇化化工产业公共服务平台</title>
        </Helmet>
        <div className="container">Home</div>
      </div>
    )
  }
}

export default Bar
