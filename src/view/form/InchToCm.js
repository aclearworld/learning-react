import React from 'react'
import NumberTextForm from './NumberTextForm'

/**
 * inch change to Cm
 */
export default class InchToCm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inch: 0,
      cm: 0
    }
  }

  inchChange (e) {
    const inchValue = e.value
    // parse to cm
    this.setState({
      inch: inchValue,
      cm: inchValue * 2.45
    })
  }

  cmChange (e) {
    const cmValue = e.value
    // parse to inchChange
    this.setState({
      inch: cmValue / 2.45,
      cm: cmValue
    })
  }

  render () {
    return (<div>
      <NumberTextForm
        label='inch'
        onChange={e => this.inchChange(e)}
        value={this.state.inch} />
      <NumberTextForm
        label='cm'
        onChange={e => this.cmChange(e)}
        value={this.state.cm} />
    </div>
    )
  }
}
