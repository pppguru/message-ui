'use strict'

const config = require('./config.global')

config.appName = 'messageus-web-local'
config.apiUrl = 'https://messageus-dev-api.herokuapp.com/api/1'
config.firebaseUrl = 'https://messageus-test.firebaseio.com'

module.exports = config
