'use strict'

const config = require('./config.global')

config.appName = 'messageus-web-production'
config.apiUrl = 'https://api.message.us/api/1'
config.firebaseUrl = 'https://messageus-prod.firebaseio.com'

module.exports = config
