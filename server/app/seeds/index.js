import { MONGO_URI } from './../config'
import mongooseConnector from '../connectors/mogoose-connector'
import userSeeds from './user-seeds'

initSeeds()

async function initSeeds() {
  const mongoConnection = await mongooseConnector(MONGO_URI)

  await mongoConnection.connection.dropDatabase()

  const users = await userSeeds()
  console.log(users)

  mongoConnection.disconnect()
}
