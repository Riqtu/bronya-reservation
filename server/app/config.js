import config from 'config'
import dotenv from 'dotenv'
import envs from './constants/envs'
import env from './utils/env'

dotenv.config()

if (!envs[env]) {
  throw Error(`unknown env ${env}`)
}

const PORT = process.env.PORT || config.get('port')
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri')
const JWT_SECRET = config.get('jwt.secret')

if (!JWT_SECRET) {
  throw Error('You mast pass jwt secret string')
}

export { PORT, MONGO_URI, JWT_SECRET }
