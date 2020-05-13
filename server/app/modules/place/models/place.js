import mongoose, { Schema } from 'mongoose'

const PlaceSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  color: {
    type: Object,
  },
  logo: {
    type: String,
    trim: true,
  },
  start: {
    type: Number,
    trim: true,
  },
  end: {
    type: Number,
    trim: true,
  },
  table: [
    {
      x: Number,
      y: Number,
      seats: Number,
      guest: [
        {
          guestName: String,
          phone: String,
          date: Date,
        },
      ],
    },
  ],
  map: {
    type: String,
    trim: true,
  },
})

PlaceSchema.statics.createFields = [
  'name',
  'description',
  'address',
  'start',
  'end',
  'color',
  'logo',
  'table',
  'map',
]

export default mongoose.model('place', PlaceSchema)
