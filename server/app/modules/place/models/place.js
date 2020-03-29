import mongoose, { Schema } from 'mongoose'

const PlaceSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  logo: {
    type: String,
    trim: true
  },
  table: [
    {
      id: Number,
      x: Number,
      y: Number,
      reserved: Boolean
    }
  ]
})

PlaceSchema.statics.createFields = ['name', 'description', 'logo', 'table']

export default mongoose.model('place', PlaceSchema)
