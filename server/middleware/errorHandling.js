'use strict'

exports.handle404 = (req, res, next) => {
  res.render('error404', { status: 404, url: req.url })
}

exports.handleErrors = (err, req, res, next) => {
  const statusCode = err.status || 500
  const type = err.type || 'E_INTERNAL'
  const message = err.message || 'Something went wrong.'
  res.status(statusCode).send(message)
}
