import container from './container.js'

const user = container.resolve('user')

user.getById(1)
console.info('User obtained successfully')

const newUser = {
  name: 'John Doe',
  email: 'johndoe@example.com',
}

user.create(newUser)
console.info('User created successfully')
