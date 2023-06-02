'use strict'

class User {
  constructor({ database }) {
    this.database = database
  }

  getById(id) {
    const sql = `SELECT * FROM users WHERE id = ${id}`
    return this.database.query(sql)
  }

  create(user) {
    const sql = `INSERT INTO users (name, email) VALUES ('${user.name}', '${user.email}')`
    return this.database.query(sql)
  }
}

export default User
