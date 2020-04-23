import Router from 'koa-router'
import auth from './auth'
import places from './place'
import upload from './upload'

const router = new Router({ prefix: '/api' })

router.use(auth)
router.use(places)
router.use(upload)

export default router.routes()
