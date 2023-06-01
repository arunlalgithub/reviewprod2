const express= require('express');
const router = express.Router()
const {upload} = require('../middlewares/imageStorage')
const user= require('../controller/userController')
const validate = require('../validation/user/user_validation')
const auth = require('../middlewares/auth_middleware')


//  router.post('/registeruser', upload.single("profilepic"), user.userSignup)
router.post('/registerUser', user.userSignup)
//router.post('/userLogin', validate.userLoginValidation , user.userLogin)
router.post('/userLogin', upload.single("profilepic"),user.userLogin)
router.post('/registerUser', user.userSignup)
//router.post('/send-reset-password-email', auth.checkUserAuth , user.sendUserRestPasswordEmail)
 router.post('/send-reset-password-email',user.sendUserResetPasswordEmail)
router.post('/reset-password', user.userPasswordReset)

module.exports = router;
 