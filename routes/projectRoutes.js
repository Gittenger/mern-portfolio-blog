const express = require('express')
const projectController = require('../controllers/projectController')
const authController = require('../controllers/authController')

const router = express.Router()

const {
	getAll,
	getOne,
	createProject,
	deleteProject,
	updateProject,
} = projectController
const { protect } = authController

router.get('/', getAll)
router.get('/:slug', getOne)

router.use(protect)

router.post('/', createProject)
router.post('/:id', updateProject)
router.delete('/:id', deleteProject)

module.exports = router
