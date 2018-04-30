import React from 'react'
import styles from './checkbox.css'

class CheckBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
    // this.clickeHandler = this.clickeHandler.bind(this)
  }

  clickeHandler () {
    const newValue = !(this.state.checked)
    this.setState({
      checked: newValue
    })
  }

  render () {
    const mark = '■'
    let style = {
      color: '#ffffff'
    }
    if (this.state.checked) {
      style = {
        color: '#ffff00'
      }
    } else {
      style = {
        color: '#337225'
      }
    }
    return (<div className={styles.default} onClick={() => { return this.clickeHandler() }}>
      <span className="test">test</span>
      <span style={style}> {mark} </span> {this.props.label}
    </div>)
  }
}

export default CheckBox
