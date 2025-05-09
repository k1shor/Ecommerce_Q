const { register, verifyEmail, resendVerification, forgetPassword, resetPassword, login, getUserInfo } = require('../controllers/userController')

const router = require('express').Router()

router.post('/register',register)
router.get('/verify/:token',verifyEmail)
router.post('/resendverification',resendVerification)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword/:token',resetPassword)

router.post('/login',login)
router.post('/getuserinfo',getUserInfo)

module.exports = router