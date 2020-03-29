import { Place } from './../models'

export default {
  async createPlace(data) {
    return Place.create(data)
  },
  async updatePlace(data, place) {
    place.set(data)

    return place.save()
  }
}
