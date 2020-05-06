import Router from 'koa-router'
import auth from './auth'
import places from './place'
import upload from './upload'
import reservation from './reservation'

const router = new Router({ prefix: '/api' })

router.use(auth)
router.use(places)
router.use(upload)
router.use(reservation)

export default router.routes()
