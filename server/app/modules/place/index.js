import Router from 'koa-router'
import placesController from './controllers/places-controller'
import checkUser from './../../handlers/checkUser'
import { Place } from './models'

const router = new Router({ prefix: '/places' })

router.post('/', checkUser(), placesController.create)
router.put('/:id', checkUser(), placesController.update)
router.delete('/:id', checkUser(), placesController.delete)
router.get('/', placesController.getPlace)
router.get('/:id', placesController.getPlaceByID)

export { Place }

export default router.routes()
