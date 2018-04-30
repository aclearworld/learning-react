const React = require('react')
const ReactDOM = require('react-dom')

const style = {
  color: 'red',
  backgroundColor: '#fff055',
  fontSize: '2em'
}

setInterval(clock, 1000)

function clock () {
  const time = new Date()
  const [hour, min, sec] = [
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  ]
  const z2 = value => {
    const timestr = '00' + value
    return timestr.substr(timestr.length - 2, 2)
  }
  ReactDOM.render(
    <div style={style}>{z2(hour)}:{z2(min)}:{z2(sec)}</div>,
    document.querySelector('#content')
  )
}
