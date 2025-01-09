const express = require('express');
const adminController = require('../controllers/admin.controller');
const { authAdmin } = require('../middlewares/auth.middleware');

const router = express.Router();

// Register Admin
router.post('/register', adminController.register);

// Login Admin
router.post('/login', adminController.login);

router.post('/jobs', authAdmin, (req, res) => {
    res.json({ message: 'Job posted successfully' });
  });

  router.get('/logout', authAdmin, adminController.logoutAdmin)

module.exports = router;