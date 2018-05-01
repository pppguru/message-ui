'use strict'

const config = {}
config.port = process.env.PORT || 3000

// Logging setup
config.logging = {
  enabled: true,
  logentriesToken: null
}

module.exports = config
