import pick from 'lodash/pick'
import { Reservation } from '../models'
import { ReservationService } from '../services'
import { addHours } from 'date-fns'

export default {
  async create(ctx) {
    const reservation = ctx.request.body
    const reservationData = {
      ...pick(reservation, Reservation.createFields),
    }
    try {
      const { _id } = await ReservationService.createReservation(
        reservationData
      )
      const reservation = await Reservation.findOne({ _id })
      ctx.body = { data: reservation }
      ctx.req.io.emit('message', { action: 'update', id: reservation.tableId })
    } catch (e) {
      console.log(e)
      ctx.throw(400, e)
    }
  },
  async update(ctx) {
    const {
      params: { id: _id },
      request: { body },
    } = ctx

    const reservation = await Reservation.findOne({ _id })

    if (!reservation) {
      ctx.throw(404, 'Missing place')
    }

    const newData = pick(body, Reservation.createFields)

    const updatedPlace = await ReservationService.updateReservation(
      newData,
      reservation
    )

    ctx.body = { data: updatedPlace }
  },
  async delete(ctx) {
    const {
      params: { id: _id },
    } = ctx

    const reservation = await Reservation.findOne({ _id })

    if (!reservation) {
      ctx.throw(404, 'Missing place')
    }

    await reservation.remove()
    ctx.req.io.emit('message', { action: 'update', id: reservation.tableId })

    ctx.body = { data: { id: _id } }
  },
  async getByID(ctx) {
    const {
      params: { id: _id },
    } = ctx
    const reservation = await Reservation.findOne({ _id })

    ctx.body = { data: pick(reservation, Reservation.createFields) }
  },
  async get(ctx) {
    const reservation = await Reservation.find({})
    ctx.body = { data: reservation }
  },
  async getTable(ctx) {
    const date = new Date()
    date.setDate(date.getDate() - 1)

    const reservation = await Reservation.findAll({})
    ctx.body = { data: reservation }
  },
  async getDate(ctx) {
    const {
      params: { date: date1, table: table },
    } = ctx

    const reservation = await Reservation.findOne({
      $and: [{ tableId: table }, { date: date1 }],
    })

    ctx.body = { data: reservation }
  },
  async getOnlyDate(ctx) {
    const {
      params: { date: date1, place: placeId },
    } = ctx

    const reservation = await Reservation.find({
      $and: [{ placeId: placeId }, { date: date1 }],
    })

    let arr = []
    reservation.map((el, index) => {
      arr.push(el.tableId)
    })

    ctx.body = { data: arr }
  },
  async getByTableId(ctx) {
    const {
      params: { table: table },
    } = ctx

    const date = new Date()
    date.setDate(date.getDate() - 1)

    const reservation = await Reservation.find({
      $and: [
        { tableId: table },
        {
          date: {
            $gt: date,
          },
        },
      ],
    }).sort([['date']])
    ctx.body = { data: reservation }
  },
}
