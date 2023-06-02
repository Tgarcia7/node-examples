'use strict'

import container from "./container.js"
const user = container.resolve('user')

user.getById(1)
console.log('User obtained successfully')

const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com',
}

user.create(newUser)
console.log('User created successfully')
