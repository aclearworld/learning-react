import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {r: 4}
    console.log('constructor')
  }
  componentWillMount () {
    console.log('componentWillMount')
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComonentUpdate')
    return true
  }
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render () {
    console.log('render')
    const setStateHandler = e => {
      console.log('* call setState')
      this.setState({
        // r: Math.random()
      })
    }
    return (
      <div>
        <button onClick={setStateHandler}>{this.state.r}</button>
      </div>
    )
  }
}

export default App
