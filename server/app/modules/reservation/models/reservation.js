import mongoose, { Schema } from 'mongoose'
import { Place } from '../../place/models'

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
    ref: Place,
  },
  tableId: {
    type: String,
    trim: true,
  },
  tableIndex: {
    type: String,
    trim: true,
  },
})

Reservation.statics.createFields = [
  'guestName',
  'phone',
  'date',
  'tableId',
  'tableIndex',
  'placeId',
]

export default mongoose.model('reservation', Reservation)
