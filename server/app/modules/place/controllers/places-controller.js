import pick from 'lodash/pick'
import { Place } from './../models'
import { PlaceService } from './../services'

export default {
  async create(ctx) {
    // console.log(Place.createFields)

    const placeData = {
      ...pick(ctx.request.body, Place.createFields)
    }

    // const { _id } = await Place.create(
    //   pick(ctx.request.body, Place.createFields)
    // )

    try {
      const { _id } = await PlaceService.createPlace(placeData)
      const place = await Place.findOne({ _id })
      ctx.body = { data: place }
    } catch (e) {
      ctx.throw(400, e)
    }
  },

  async update(ctx) {
    const {
      params: { id: _id },
      request: { body }
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
      params: { id: _id }
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
      request: { body }
    } = ctx
    const place = await Place.findOne({ _id })

    console.log(body)
    ctx.body = { data: pick(place, Place.createFields) }
  },
  async getPlace(ctx) {
    const place = await Place.find({})

    console.log(place)
    ctx.body = { data: place }
  }
}
