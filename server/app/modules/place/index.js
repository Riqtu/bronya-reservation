import Router from 'koa-router'
import placesController from './controllers/places-controller'
import { Place } from './models'
import checkAdmin from '../../handlers/checkAdmin'
import checkUser from '../../handlers/checkUser'

const router = new Router({ prefix: '/places' })

router.post('/', placesController.create)
router.put('/:id', placesController.update)
// router.put('/addGuest/:id', placesController.addGuest)

router.delete('/:id', checkAdmin(), placesController.delete)

router.get('/', placesController.getPlace)
router.get('/:id', placesController.getPlaceByID)

export { Place }

export default router.routes()
