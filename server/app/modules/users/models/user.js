import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-beautiful-unique-validation'

mongoose.plugin(uniqueValidator)

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: 'User with email "VALUE" already exist',
      lowercase: true,
      required: 'Email is required',
      trim: true,
    },
    phone: {
      type: String,
      required: 'Phone is required',
      trim: true,
    },
    password: {
      type: String,
      required: 'Password is required',
      trim: true,
    },
    name: {
      type: String,
      lowercase: true,
      required: 'First name is required',
      trim: true,
    },
    role: {
      type: String,
      lowercase: true,
      trim: true,
    },
    likes: [],
  },
  {
    timestamps: true,
  }
)

UserSchema.statics.createFields = [
  'email',
  'password',
  'name',
  'role',
  'phone',
  'likes',
]

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = bcrypt.genSaltSync(10)
  this.password = bcrypt.hashSync(this.password, salt)
  next()
})

UserSchema.methods.comparePasswords = function (password) {
  return bcrypt.compareSync(password, this.password)
}

UserSchema.statics.findOneWithPublicFields = function (params, cb) {
  return this.findOne(params, cb).select({
    password: 0,
    _id: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0,
  })
}

export default mongoose.model('user', UserSchema)
