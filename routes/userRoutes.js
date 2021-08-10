const express = require('express')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const {
	signup,
	login,
	protect,
	restrictTo,
	logout,
	forgotPassword,
	updatePassword,
	resetPassword,
} = authController
const { getOne, getMe, getAll, updateMe, deleteMe } = userController

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/forgotPassword', forgotPassword)
router.patch('/resetPassword/:token', resetPassword)

router.use(protect)

router.get('/me', getMe, getOne)
router.patch('/me/update', updateMe)
router.patch('/updatePassword', updatePassword)
router.delete('/me/delete', deleteMe)

router.get('/list', restrictTo('admin'), getAll)
router.get('/:id', restrictTo('admin'), getOne)

module.exports = router
