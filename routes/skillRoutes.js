const express = require('express')
const skillsController = require('../controllers/skillsController')
const authController = require('../controllers/authController')

const { createCard, getAll, getOne, updateCard } = skillsController
const { protect } = authController

const router = express.Router()

router.get('/', getAll)
router.get('/:slug', getOne)

router.use(protect)

router.post('/', createCard)
router.post('/:id', updateCard)

module.exports = router
