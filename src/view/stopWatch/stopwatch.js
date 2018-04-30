import React from 'react'
import styles from './stopwatch.css'

class Stopwatch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: new Date(0),
      displayTimerStatus: 'start'
    }
    this.timerId = 0
    this.timerStatus = 'stop'
  }

  componentDidMount () {
    this.start()
  }

  // アンマウント時
  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  /*
   * timer - 一秒毎にコンポーネントが持つ時間をすすめる
   *
   * @return {type}  description
   */
  timer () {
    // 一秒カウントをすすめる
    this.state.time.setUTCSeconds(this.state.time.getUTCSeconds() + 1)
    this.setState({
      displayTimerStatus: 'stop'
    })
  }

  /*
   * clickeHandler - クリック時
   * タイマー機能をtoggelします
   *
   * @param  {type} e description
   */
  startOrStopClick (e) {
    if (this.timerStatus === 'stop') {
      this.start()
    } else if (this.timerStatus === 'start') {
      this.stop()
    }
  }

  /**
   * start - タイマーをスタートさせます
   */
  start () {
    this.state.time = new Date(0)
    this.timerId = setInterval(e => { this.timer() }, 1000)
    this.timerStatus = 'start'
  }

  stop () {
    clearInterval(this.timerId)
    this.timerStatus = 'stop'
    console.log('timer is stopping now')
    this.setState({displayTimerStatus: 'start'})
  }

  resetClick () {
    this.setState({
      time: new Date(0)
    })
  }

  /*
   * displayCurrentTime - 表示用の時刻を
   * 文字列で取得
   *  return {string} 表示用にフォーマットされた時刻
   */
  displayCurrentTime () {
    const time = this.state.time
    console.log(time)
    const formatter = (num) => {
      const s = '00' + num
      return s.substr(s.length - 2, 2)
    }

    return <span className={styles.displaytime} >{formatter(time.getUTCHours())}:{formatter(time.getUTCMinutes())}:
      {formatter(time.getUTCSeconds())}</span>
  }

  render () {
    const disp = this.displayCurrentTime()
    return (<div className={styles.stopwatch}>
      {disp}
      <button className={styles.button} onClick={() => this.resetClick()}>reset</button>
      <button className={styles.button} onClick={() => this.startOrStopClick()} >{this.state.displayTimerStatus}</button>
    </div>)
  }
}

export default Stopwatch
