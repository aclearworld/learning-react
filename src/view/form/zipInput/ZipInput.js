import React, {Component} from 'react'
import styles from './ZipInput.css'
import PropTypes from 'prop-types'

export default class ZipInput extends Component {
  constructor (props) {
    super(props)
    // initialize
    const initializeValue = this.props.value || ''
    this.state = {
      value: initializeValue,
      isCorrect: this.validator(initializeValue)
    }
  }

  // テキスト変更イベント
  textChangeEvent (e) {
    const value = e.target.value
    const newValue = value.replace(/[^0-9-]+/g, '')
    const newIsCorrect = this.validator(newValue)
    this.setState({
      value: newValue,
      isCorrect: newIsCorrect
    })

    if (this.props.onChange) {
      this.props.onchange({
        target: this,
        value: newValue,
        isCorrect: newIsCorrect
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.state({
      value: nextProps.value,
      isCorrect: this.validator(nextProps.isCorrect)
    })
  }

  render () {
    const statusBox = this.renderStatusBox(this.state.isCorrect)
    return (<div>
      <label>
        <p>郵便番号: </p>
        <input type='text' placeholder='郵便番号を入力〒'
          value={this.state.value} onChange={e => this.textChangeEvent(e)} />
      </label>
      {statusBox}
    </div>
    )
  }

  renderStatusBox () {
    let StatusBox = null
    let style = null
    if (this.state.isCorrect) {
      style = styles.statusBoxCorrect
      StatusBox = <span className={style}>OK</span>
    } else if (this.state.value !== '') {
      style = styles.statusBoxError
      StatusBox = <span className={style}>NG</span>
    }
    return StatusBox
  }

  /*
  入力値のチェック
   */
  validator (value) {
    const zipPattern = /^\d{3}-\d{4}$/
    return zipPattern.test(value)
  }
}

// ZipInput.propTypes = {
//   value: PropTypes.string.isRequired,
//   isCorrect: PropTypes.bool,
//   onchange: PropTypes.func,
//   filter: PropTypes.object
// }
//
// ZipInput.defallutProps = {
//   filter: null,
//   value: '',
//   onchange: null,
//   isCorrect: null
// }
