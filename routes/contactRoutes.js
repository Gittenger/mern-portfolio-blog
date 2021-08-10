const express = require('express')
const contactController = require('../controllers/contactController')

const { sendEmail } = contactController

const router = express.Router()

router.post('/sendEmail', sendEmail)

module.exports = router
