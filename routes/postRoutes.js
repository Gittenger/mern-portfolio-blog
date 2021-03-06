const express = require('express')
const postController = require('../controllers/postController')
const authController = require('../controllers/authController')

const {
	getFile,
	getAll,
	createPost,
	deletePost,
	updatePost,
	deleteAll,
} = postController
const { protect } = authController

const router = express.Router()

router.get('/:slug', getFile)
router.get('/', getAll)

router.use(protect)

router.post('/', createPost)
router.delete('/:id', deletePost)
router.delete('/', deleteAll)
router.post('/:id', updatePost)

module.exports = router
