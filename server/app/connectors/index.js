import { MONGO_URI } from './../config'
import mongooseConnector from './mogoose-connector'
import server from './../server'

async function connectorsInit() {
  try {
    mongooseConnector(MONGO_URI)
  } catch (e) {
    server.close()
    console.error(e)
  }
}

export { mongooseConnector }

export default connectorsInit
