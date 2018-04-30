import React, {Component} from 'react'
import styles from './FormInput.css'
import PropTypes from 'prop-types'

export default class FormInput extends Component {
  constructor (props) {
    super(props)
    // initialize
    this.state = {
      value: this.props.value,
      isCorrect: this.validator(this.props.value)
    }
  }

  // テキスト変更イベント
  onTextChange (e) {
    const value = e.target.value
    let newValue = value
    if (this.props.filter) {
      newValue = value.replace(this.props.filter, '')
    }
    const newIsCorrect = this.validator(newValue)
    this.setState({
      value: newValue,
      isCorrect: newIsCorrect
    })

    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isCorrect: newIsCorrect,
        name: this.props.name
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isCorrect: this.validator(nextProps.value)
    })
  }

  render () {
    const statusBox = this.renderStatusBox()
    return (<div>
      <label>
        <p>{this.props.label}</p>
        <input type='text' placeholder={this.props.placeHolder} name={this.props.name}
          value={this.state.value} onChange={e => this.onTextChange(e)} />
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
    if (!this.props.pattern) {
      return true
    }
    if (!(typeof (value) === 'string')) {
      return false
    }
    return this.props.pattern.test(value)
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func
}

FormInput.defallutProps = {
  filter: null,
  pattern: null,
  value: '',
  placeHolder: '',
  onChange: null
}
