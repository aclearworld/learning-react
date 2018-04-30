const http = require('http')
const sever = http.createServer(handler)
sever.listen(8081)

function handler (req, res) {
  console.log('url:', req.url)
  console.log('method:', req.method)

  // httpヘッダを出力
  res.writeHead(200, {'content-Type': 'text/html'})
  res.end('<h1>hello node.js</h1>\n')
}
