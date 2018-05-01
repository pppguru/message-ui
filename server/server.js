'use strict'

const log = require('./common/logger')
const config = require('./../config')
const app = require('./app')

// Start listening
const server = app.listen(config.port, () => {
  log.info(`Server started at port ${server.address().port}`)
})
