const React = require('react')
const ReactDOM = require('react-dom')

setInterval(bainalClock, 1000)

function bainalClock () {
  // methoods
  const z2 = value => {
    const timestr = '00' + value
    return timestr.substr(timestr.length - 2, 2)
  }

  const z4 = value => {
    const timestr = '0000' + value
    return timestr.substr(timestr.length - 4, 4)
  }
  // CSSs
  const noActive = {
    color: '#ffffff',
    backgroundColor: '#000000',
    fontSize: '2em',
    transition: 'all 500ms linear 0s'
  }

  const active = {
    color: '#000000',
    backgroundColor: '#ffffff',
    fontSize: '2em',
    transition: 'all 500ms linear 0s'
  }

  const time = new Date()
  const [hour, min, sec] = [
    z2(time.getHours()),
    z2(time.getMinutes()),
    z2(time.getSeconds())
  ]
  const bin = hour + min + sec
  console.log('bin:  ' + bin)
  const element = []
  for (let i = 0; i < bin.length; i++) {
    const target = parseInt(bin.substr(i, 1))
    console.log('target:  ' + target)
    const binary = z4(target.toString(2))
    console.log('binary:   ' + binary)
    for (let j = 0; j < binary.length; j++) {
      if (binary.substr(j, 1) === '0') {
        element.push(<span style={noActive}>○</span>)
      } else {
        element.push(<span style={active} >○</span>)
      }
    }
    element.push(<br />)
  }

  ReactDOM.render(
    <div>{element}</div>,
    document.querySelector('#content')
  )
}
