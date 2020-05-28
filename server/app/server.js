import app from './app'
import { PORT } from './config'
const fs = require('fs')
const https = require('https')
const path = require('path')

// const options = {
//   // Local certificates, if you don;t have them generate from mkcert or letsEncrypt
//   key: fs.readFileSync(__dirname + '/key.key', 'utf8'.toString()),
//   cert: fs.readFileSync(__dirname + '/crt.crt', 'utf8'.toString()),
// }

// const server = https
//   .createServer(options, app.callback())
//   .listen(PORT, (err) => {
//     if (err) console.log(err)
//     console.log(`Server started on port: ${PORT}`)
//   })

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    console.log(data)
    socket.emit('message', 'hi Client')
  })
})

server.listen(PORT, (err) => {
  if (err) console.log(err)
  console.log(`Server started on port: ${PORT}`)
})

export { io }
export default server
