require('dotenv').config()
const bcrypt = require('bcryptjs')

const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgress',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})