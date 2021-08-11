const express = require('express')
const postController = require('../controllers/postController')

const { getFile, getAll } = postController

const router = express.Router()

router.get('/:id', getFile)
router.get('/', getAll)

module.exports = router
