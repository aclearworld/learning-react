import React from 'react'

/**
 * 数値入力用テキストフォーム
 * props.value first value
 */
export default class NumberTextForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  doChange (e) {
    const curCValue = e.target.value.replace(/[^0-9|.]/g, '')
    // 自分の値を変更
    this.setState({
      value: curCValue
    })
    // notification parent component
    if (this.props.onChange) {
      this.props.onChange({
        value: curCValue,
        target: this
      })
    }
  }

  // change props
  componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value })
  }

  // doSubmit(e) {
  //   window.alert('値を送信：' + this.state.value)
  //   e.preventDefault()
  // }

  render () {
    return (<div>
      <label>
        {this.props.label}
        <br></br>
        <input type="text" value={this.state.value} onChange={e => this.doChange(e)}/>
      </label>
    </div>)
  }
}
