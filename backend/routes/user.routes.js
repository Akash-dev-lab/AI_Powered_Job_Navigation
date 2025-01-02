const express = require('express')
const router = express.Router()
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userModel = require('../models/user.model')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],  userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at')
], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, userController.logoutUser)

router.get('/users/:email', async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router