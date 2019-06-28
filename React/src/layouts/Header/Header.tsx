import * as React from 'react'
import './header.styl'
import VButton from '../../components/Button/Button'

interface HeaderProps {
    msg: string;
}

class Header extends React.Component<HeaderProps> {
  public render() {
    const { msg } = this.props
    return (
      <div className='header'>
        <a className="logo-box" href="/">
          <span className="logo"></span>
          <div className="text">
          </div>
        </a>
        <div className="search-wrap">
          <div className="search-type">
            <ul>
              <li><a className="active" href="javascript:;">找咨询</a></li>
              <li><a href="javascript:;">找企业</a></li>
            </ul>
          </div>
          <div className="search-input">
            <span className="icon"></span>
            <input type="text" className="input" placeholder="请输入文字" defaultValue=""/>
            <VButton msg="搜索" size="small"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
