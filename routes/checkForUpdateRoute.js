const express = require('express')
const checkForUpdateController = require('../controllers/checkForUpdateController')

const { checkForUpdate, createInitValue } = checkForUpdateController

const router = express.Router()

router.get('/', checkForUpdate)
router.post('/', createInitValue)

module.exports = router
