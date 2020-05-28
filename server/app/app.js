import Koa from 'koa'
import cors from '@koa/cors'
import connectorsInit from './connectors'
import initHandlers from './handlers'
import modules from './modules'
import serve from 'koa-static'
import bodyParser from 'koa-body'
import { io } from './server'
connectorsInit()

const app = new Koa()
app.use(cors())

// const server = require('http').createServer(app.callback())
// const io = require('socket.io')(server)

// io.on('connection', (socket) => {
//   socket.on('message', (data) => {
//     console.log(data)
//     socket.emit('message', 'hi Client')
//   })
// })
app.use(async (ctx, next) => {
  ctx.req.io = io
  await next()
})
app.use(
  bodyParser({
    formidable: { uploadDir: './app/uploads', keepExtensions: true },
    multipart: true,
    urlencoded: true,
  }),
  (ctx) => {
    console.log(ctx.body)
  }
)
app.use(serve('./app/uploads'))
initHandlers(app)
app.use(modules)

export default app
