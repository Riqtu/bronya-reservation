import pick from 'lodash/pick'
import { Place } from './../models'
import { PlaceService } from './../services'

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

    const newData = pick(body, Place.createFields)

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

    ctx.body = { data: pick(place, Place.createFields) }
  },
  async getPlace(ctx) {
    const place = await Place.find({})
    ctx.body = { data: place }
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
          guestName: body.name,
          phone: body.phone,
          date: body.date,
        })
        console.log('ok!')
      }
    })

    const newData = pick(body, Place.createFields)

    const updatedPlace = await PlaceService.updatePlace(newData, place)

    ctx.body = { data: updatedPlace }
  },
}
