const express = require('express')
const postController = require('../controllers/postController')

const { getFile, getAll, createPost } = postController

const router = express.Router()

router.get('/:id', getFile)
router.get('/', getAll)
router.post('/', createPost)

module.exports = router
