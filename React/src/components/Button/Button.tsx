import * as React from 'react'
import cs from 'classnames'
import './button.styl'

type sizeNames = 'normal' | 'small' | 'big'
interface ButtonProps {
    msg: string;
    size?: sizeNames;
    fontSize?: string;
}
interface Styles {
  fontSize: string;
}

class Button extends React.Component<ButtonProps> {
  public render() {
    const { msg, size = 'normal', fontSize } = this.props
    let btnClass = cs({
      'v-btn': true,
      'v-btn-normal': size === 'normal',
      'v-btn-small': size === 'small',
      'v-btn-big': size === 'big'
    })
    let styles: Styles = {
      fontSize: fontSize ? `${fontSize}px` : ''
    }

    return (
      <div className={ btnClass } style={ styles }>{ msg }</div>
    )
  }
}

export default Button
