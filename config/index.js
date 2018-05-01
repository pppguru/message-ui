'use strict'

const env = process.env.NODE_ENV || 'test'
const config = require(`./config.${env}`)

config.env = env

module.exports = config