import faker from 'faker'
import _ from 'lodash'
import { User } from './../modules/users'

const init = () => {
  const promises = []

  _.times(20, () => {
    const userPromise = User.create({
      email: faker.internet.email(),
      firstName: faker.name.findName(),
      lastName: faker.name.findName(),
      password: '1111'
    })

    promises.push(userPromise)
  })
  return Promise.all(promises)
}

export default init
