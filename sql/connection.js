const mysql = require('mysql')

require('dotenv').config();

const {DB_HOST,DB_USER,DB_PASSWORD,DB_DATABASE} = process.env

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        // host: DB_HOST,
        // user: DB_USER,
        // password: DB_PASSWORD,
        // database: DB_DATABASE
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;