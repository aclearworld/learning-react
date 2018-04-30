const http = require('http')
const cType = {'Content-Type': 'text/html;charset=utf-8'}
// サーバー実行
const sever = http.createServer(handler)
sever.listen(8081)

function handler (req, res) {
  console.log(req.headers)
  showIndexPage(req, res)
}

// function handler (req, res) {
//   const url = req.url
//   console.log('url:', url)
//   console.log('method:', req.method)
//
//   // トップページか？
//   if (url === '/' || url === '/index.html') {
//     showIndexPage(req, res)
//     return
//   }
//   // サイコロページか？
//   if (url.substr(0, 6) === '/dice/') {
//     showDicePage(req, res)
//     return
//   }
//
//   // それ以外
//   res.writeHead(404, cType)
//   res.end('404 Not Faund')
// }

// トップページを表７時
function showIndexPage (req, res) {
  res.writeHead(200, cType)
  const html = '<form method="post" action="/" enctype="multipart/form-data"> ' +
    ' <input type="file" name="aFile" />  <br/>' +
    ' <input type="submit"  value="upload" /> </form>'
  res.end(html)
}

function showDicePage (req, res) {
  res.writeHead(200, cType)
  const maxParam = req.url.split('/')[2]
  const randamNumber = Math.floor((Math.random() * maxParam) + 1)
  const html = '<h1>' + randamNumber + '</h1>'
  res.end(html)
}
