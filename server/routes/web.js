'use strict'

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/app', (req, res) => res.render('app'))
router.get('/about', (req, res) => res.render('about'))
router.get('/terms-of-service', (req, res) => res.render('terms-of-service'))
router.get('/privacy-policy', (req, res) => res.render('privacy-policy'))
router.get('/customer-messaging', (req, res) => res.render('customer-messaging'))
router.get('/for-businesses', (req, res) => res.render('for-businesses'))
router.get('/managing-payments', (req, res) => res.render('managing-payments'))
router.get('/team-communication', (req, res) => res.render('team-communication'))
router.get('/connect-your-brand', (req, res) => res.render('connect-your-brand'))

router.use((req, res) => {
  res.status(404).render('404')
})

module.exports = router
