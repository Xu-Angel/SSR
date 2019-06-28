import * as React from 'react'

interface FooterProps {
    msg: string;
}

class Footer extends React.Component<FooterProps> {
  public render() {
    const { msg } = this.props
    return (
      <div>
        <div>我是footer-{msg}</div>
      </div>
    )
  }
}

export default Footer
