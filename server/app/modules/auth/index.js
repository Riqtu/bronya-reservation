import Router from 'koa-router'
import authController from './controllers/auth-controller'
import checkUser from '../../handlers/checkUser'

const router = new Router({ prefix: '/auth' })

router
  .post('/signup', authController.signUp)
  .post('/signin', authController.signIn)
  .put('/user/:id', checkUser(), authController.updateUser)
  .post('/private', checkUser(), (ctx) => {
    ctx.body = ctx.user
  })

export default router.routes()
