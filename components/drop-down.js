import React, {Component} from 'react'
import classNames from 'classnames'

export default class DropDown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }
  toggle (event) {
    this.setState({ active: !this.state.active })
    event.stopPropagation()
  }
  render () {
    const {
      style,
      className,
      children
    } = this.props

    return (
      <div
        className={classNames('drop-down', className, { active: this.state.active })}
        style={style}
        onClick={this.toggle.bind(this)}
      >
        { children }
        <style jsx>{`
        .drop-down {
          position: relative;
          cursor: pointer;
        }
        .drop-down :global(ul) {
          position: absolute;
          z-index: 2;
          top: -9999px;
          left: 0;
          padding: 5px 0;
          background: #fff;
          border: 1px solid rgba(0,0,0, .1);
          box-shadow: 0 1px 2px rgba(0,0,0, .1);
        }
        .drop-down.active :global(ul) {
          top: 100%;
        }
        .drop-down :global(.align-right) {
          left: auto;
          right: 0;
        }
        .drop-down :global(a) {
          display: block;
          padding: 3px 20px;
          color: #333;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
        }
        .drop-down :global(a:hover) {
          background: #eee;
        }
        `}</style>
      </div>
    )
  }
}
