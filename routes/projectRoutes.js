const express = require('express')
const projectController = require('../controllers/projectController')

const router = express.Router()

const { getAll, getOne, createProject } = projectController

router.get('/', getAll)
router.get('/:slug', getOne)
router.post('/', createProject)

module.exports = router
