'use strict'

const bunyan = require('bunyan')
const config = require('../../config')
const logentries = require('le_node')

const logStreams = []

if (config.logging.enabled) {

  // console stream
  logStreams.push({
    name: 'console',
    level: 'debug',
    stream: process.stdout
  })

// log entries stream
  if (config.logging.logentriesToken) {
    logStreams.push(
      logentries.bunyanStream({
        token: config.logging.logentriesToken
      })
    )
  }
}

// initialize logger
const logger = bunyan.createLogger({
  name: config.appName,
  streams: logStreams,
  serializers: bunyan.stdSerializers
})

module.exports = logger
