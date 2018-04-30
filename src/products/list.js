const React = require('react')
const ReactDOM = require('react-dom')

class Rlist extends React.Component {
  render () {
    const items = this.props.items.split(',')
    // CreateliElement
    const CreateliElement = items.map(e => {
      return <li key={e}>{e}</li>
    })

    // タイトル設定
    let title = this.props.title
      ? this.props.title
      : 'List'
    return <div>
      <ul>{title}{CreateliElement}</ul>
    </div>
  }
}

const dom = <div>
  <Rlist title='floot' items='ringo,greep,apple'/>
  <Rlist title='' items='koishi,tennko,sanae'/>
</div>

ReactDOM.render(dom, document.querySelector('#content'))
