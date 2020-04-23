import Koa from 'koa'
import cors from '@koa/cors'
import connectorsInit from './connectors'
import initHandlers from './handlers'
import modules from './modules'
import serve from 'koa-static'
import bodyParser from 'koa-body'

connectorsInit()

const app = new Koa()
app.use(cors())
app.use(
  bodyParser({
    formidable: { uploadDir: './app/uploads', keepExtensions: true }, // keep file extension on upload },
    multipart: true,
    urlencoded: true
  }),
  ctx => {
    console.log(ctx.body)
  }
)
app.use(serve('./app/uploads'))
initHandlers(app)
app.use(modules)

// app.use(async ctx => {
//   ctx.body = `<h1>Check</h1>`
// })

export default app
