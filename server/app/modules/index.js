import Router from 'koa-router'
import auth from './auth'
import places from './place'

const router = new Router({ prefix: '/api' })

router.use(auth)
router.use(places)

export default router.routes()
