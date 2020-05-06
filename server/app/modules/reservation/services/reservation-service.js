import { Reservation } from '../models'

export default {
  async createReservation(data) {
    return Reservation.create(data)
  },
  async updateReservation(data, reservation) {
    reservation.set(data)

    return reservation.save()
  },
}
