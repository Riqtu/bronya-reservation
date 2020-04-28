import Router from 'koa-router'
import placesController from './controllers/places-controller'
import checkUser from './../../handlers/checkUser'
import { Place } from './models'

const router = new Router({ prefix: '/places' })

router.post('/', placesController.create)
router.put('/:id', checkUser(), placesController.update)
router.put('/addGuest/:id/:tid/:name/:phone/:date', placesController.addGuest)

router.delete('/:id', checkUser(), placesController.delete)
router.get('/', placesController.getPlace)
router.get('/:id', placesController.getPlaceByID)

export { Place }

export default router.routes()
