import mongoose, { Schema } from 'mongoose'

const Reservation = new Schema({
  guestName: {
    type: String,
    required: 'Name is required',
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  date: {
    type: [Date],
  },
  placeId: {
    type: String,
    trim: true,
  },
  tableId: {
    type: String,
    trim: true,
  },
})

Reservation.statics.createFields = [
  'guestName',
  'phone',
  'date',
  'tableId',
  'placeId',
]

export default mongoose.model('reservation', Reservation)
