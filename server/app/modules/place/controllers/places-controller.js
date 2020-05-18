import pick from 'lodash/pick'
import { Place } from './../models'
import { User } from './../../users'

import { PlaceService } from './../services'

import { Reservation } from './../../reservation/models'

import { format } from 'date-fns'

export default {
  async create(ctx) {
    const fileNameMap = ctx.request.files.image.path.split('/')
    const fileNameLogo = ctx.request.files.logo.path.split('/')

    const newBody = JSON.parse(ctx.request.body.body)
    newBody.map = fileNameMap[2]
    newBody.logo = fileNameLogo[2]

    const placeData = {
      ...pick(newBody, Place.createFields),
    }
    try {
      const { _id } = await PlaceService.createPlace(placeData)
      const place = await Place.findOne({ _id })
      ctx.body = { data: place }
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

    const place = await Place.findOne({ _id })

    if (!place) {
      ctx.throw(404, 'Missing place')
    }

    const newBody = JSON.parse(ctx.request.body.body)

    const fileNameMap = ctx.request.files.image
      ? ctx.request.files.image.path.split('/')[2]
      : newBody.map
    const fileNameLogo = ctx.request.files.logo
      ? ctx.request.files.logo.path.split('/')[2]
      : newBody.logo

    newBody.map = fileNameMap
    newBody.logo = fileNameLogo

    const newData = pick(newBody, Place.createFields)

    const updatedPlace = await PlaceService.updatePlace(newData, place)

    ctx.body = { data: updatedPlace }
  },
  async delete(ctx) {
    const {
      params: { id: _id },
    } = ctx

    const place = await Place.findOne({ _id })

    if (!place) {
      ctx.throw(404, 'Missing place')
    }

    await place.remove()

    ctx.body = { data: { id: _id } }
  },
  async getPlaceByID(ctx) {
    const {
      params: { id: _id },
    } = ctx
    const place = await Place.findOne({ _id })

    // const future = place.table.map((el, index) => {
    //   const clearGuest = el.guest.filter((el, index) => {
    //     if (
    //       format(el.date, `yyyy-MM-dd'T'HH:mm`) >=
    //       format(Date.now(), `yyyy-MM-dd'T'HH:mm`)
    //     ) {
    //       console.log('Found: ', el.date)
    //       return el
    //     }
    //   })
    //   el.guest = clearGuest
    //   return el
    // })

    // const newData = place
    // newData.table = future

    // console.log(newData)

    // await PlaceService.updatePlace(newData, place)

    ctx.body = { data: pick(place, Place.createFields) }
  },
  async getPlace(ctx) {
    const place = await Place.find({})
    ctx.body = { data: place }
  },
  async getUserPlace(ctx) {
    const {
      params: { userId: userId },
    } = ctx

    console.log(userId)
    const user = await User.findOneWithPublicFields({})
      .where('_id')
      .equals(userId)

    console.log(user)
    console.log(user.likes)

    const find = await Place.find({}).where('_id').equals(user.likes)

    ctx.body = { data: find }
  },
  async addGuest(ctx) {
    const {
      params: { id: _id },
      request: { body },
    } = ctx

    console.log(body)
    const place = await Place.findOne({ _id })

    if (!place) {
      ctx.throw(404, 'Missing place')
    }
    place.table.map((el, index) => {
      const tableId = place.table[index]._id
      if (tableId == body.tableId) {
        place.table[index].guest.push({
          guestName: body.guestName,
          phone: body.phone,
          date: body.date,
        })
        console.log('ok!')
      }
    })

    ctx.socket.on('connect', () => {
      ctx.socket.emit('update')
    })

    const newData = pick(body, Place.createFields)

    const updatedPlace = await PlaceService.updatePlace(newData, place)

    ctx.body = { data: updatedPlace }

    ctx.req.io.emit('message', { action: 'update', id: _id })
  },

  async clearGuests() {
    const place = await Place.find({})

    const future = place.map((el, index) => {
      el.table.map((el, index) => {
        const clearGuest = el.guest.filter((el, index) => {
          if (
            format(el.date, `yyyy-MM-dd'T'HH:mm`) >=
            format(Date.now(), `yyyy-MM-dd'T'HH:mm`)
          ) {
            console.log('Found: ', el.date)
            return el
          }
        })
        el.guest = clearGuest
        return el
      })
      return el
    })

    const newData = place
    newData.table = future

    console.log(newData)

    await PlaceService.updatePlace(newData, place)

    console.log('CLEAT GUESTS')
  },
}
