import React, {Component} from 'react'
import FormInput from './FormInput'

export default class ProfileInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      tel: '',
      isAllCorrect: false
    }
    this.isCorrects = {}
  }

  onTextChange (e) {
    // すべてOKか？
    this.isCorrects[e.name] = e.isCorrect
    this.setState({
      [e.name]: e.value,
      isAllCorrect: this.isCorrects['email'] && this.isCorrects['tel']
    })
  }

  onSubmit (e) {
    if (this.state.isAllCorrect) {
      window.alert(JSON.stringify(this.state))
      e.preventDefault()
    }
  }

  render () {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const emailFilter = /[^\u0020-\u007e]+/g
    return (
      <div >
        <form onSubmit={e => this.onSubmit(e)} >
          <FormInput name='email' label='email'
            filter={emailFilter}
            pattern={emailPattern}
            onChange={e => this.onTextChange(e)}
            placeHolder='yourEmailAdders@example.com'
            value={this.state.email} />
          <FormInput name='tel' label='Tel'
            filter={/[^0-9-()+]+/g}
            pattern={/^[0-9-()+]+$/}
            onChange={e => this.onTextChange(e)}
            placeHolder='yourTel'
            value={this.state.tel} />
          <input type='submit'
            value='send'
            disabled={!this.state.isAllCorrect} />
        </form>
      </div>
    )
  }
}
