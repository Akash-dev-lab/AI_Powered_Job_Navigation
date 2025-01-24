const express = require('express');
const jobController = require('../controllers/Job.controller');
const { authAdmin } = require('../middlewares/auth.middleware');
const { authUser } = require('../middlewares/auth.middleware');
const { validationResult } = require('express-validator');

const router = express.Router();

// Create a new job post
router.post('/post', authUser, jobController.postJob);

// Update a job post (admin only)
router.put('/jobs/:id', authAdmin, jobController.updateJob);

// Fetch all jobs for users
router.get('/jobs', jobController.getAllJobs);

// Fetch a specific job with its applications (admin only)
router.get('/jobs/:id', authAdmin, jobController.getJobById);

// Submit details for a job (user)
router.post('/apply/:id', jobController.applyForJob);

router.post(
    '/apply/:id',
    jobController.validateSubmission,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
    jobController.applyForJob
  );

module.exports = router;