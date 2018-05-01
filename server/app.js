'use strict'

const compression = require('compression')
const express = require('express')
const config = require('./../config')
const errorHandling = require('./middleware/errorHandling')
const routes = require('./routes/web')

// Init server
const app = express()

app.locals.env = config.env

// Compress all requests
app.use(compression())

// Setup static files serving
app.use(express.static('public'))

// Setup view engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use('/', routes)

// Error handling
app.use(errorHandling.handle404)
app.use(errorHandling.handleErrors)

module.exports = app
