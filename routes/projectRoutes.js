const express = require('express')
const projectController = require('../controllers/projectController')

const router = express.Router()

const {
	getAll,
	getOne,
	createProject,
	deleteProject,
	updateProject,
} = projectController

router.get('/', getAll)
router.get('/:slug', getOne)

router.post('/', createProject)
router.post('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router
