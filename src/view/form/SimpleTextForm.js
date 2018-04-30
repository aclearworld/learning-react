import React from 'react'

export default class SimpleForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  doChange (e) {
    const curCValue = e.target.value
    this.setState({
      value: curCValue
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.doSubmit(e)}>
          <input type='text' value={this.state.value} onChange={e => this.doChange(e)} />
          <input type='submit' value='send' />
        </form>
      </div>
    )
  }
}
