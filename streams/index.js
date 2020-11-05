const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(path.join(__dirname, 'data.txt'))
  stream.pipe(res)
})

server.listen(3000)