import awilix from 'awilix'
import Database from './database.js'
import User from './user.js'

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

container.register({
  database: awilix.asClass(Database).singleton(),
  user: awilix.asClass(User),
})

export default container
