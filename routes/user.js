const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const authMiddleForUpdate = require('../middlewares/authForUpdate')

router.post('/signup', userController.singup)
router.post('/signin', userController.signin)
router.get('/check', userController.check)

router.get('/', userController.getAllUsers)
// router.get('/signout', userController.signout) // As we don't have session info in the backend, it's not possible to use passport logout()

//Access point for user info before update
router.get('/profile', authMiddleForUpdate, userController.getProfile)
// Only signned-in user should be able to change
router.put('/update', authMiddleForUpdate, userController.updateProfile)





module.exports = router