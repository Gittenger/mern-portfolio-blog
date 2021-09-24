const express = require('express')
const skillsController = require('../controllers/skillsController')

const { createCard, getAll, getOne, updateCard } = skillsController

const router = express.Router()

router.get('/', getAll)
router.get('/:slug', getOne)
router.post('/', createCard)
router.post('/:id', updateCard)

module.exports = router
