import Router from 'koa-router'
import reservationController from './controllers/reservation-controller'
import { Reservation } from './models'

const router = new Router({ prefix: '/reservation' })

router.post('/', reservationController.create)
router.put('/:id', reservationController.update)
router.delete('/:id', reservationController.delete)
router.get('/', reservationController.get)
router.get('/table/:table', reservationController.getByTableId)
router.get('/table/:table/:date', reservationController.getDate)
router.get('/place/:place/:date', reservationController.getOnlyDate)

router.get('/table', reservationController.getTable)
router.get('/:id', reservationController.getByID)

export { Reservation }

export default router.routes()
