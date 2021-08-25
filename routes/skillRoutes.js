const express = require('express')
const skillsController = require('../controllers/skillsController')

const { createCard, getAll } = skillsController

const router = express.Router()

router.get('/', getAll)
router.post('/', createCard)

module.exports = router
