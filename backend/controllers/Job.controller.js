const Job = require('../models/job.model');
const { body } = require('express-validator');

// Create a new job post
module.exports.postJob = async (req, res) => {
  try {
    const job = new Job({ ...req.body, status: "pending" });

    await job.save();

     // Emit a Socket.io event
    //  io.emit('newJob', job); // Broadcast to all clients

    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a job post (admin only)
module.exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, requirements } = req.body;
    const adminId = req.adminId;

    // Check if the job belongs to the admin
    const job = await Job.findOne({ _id: id, adminId });
    if (!job) {
      return res.status(404).json({ message: 'Job not found or unauthorized' });
    }

    // Update job fields
    job.title = title || job.title;
    job.description = description || job.description;
    job.requirements = requirements || job.requirements;

    await job.save();
    res.status(200).json({ message: 'Job updated successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Fetch all jobs for users
module.exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().select('-applications'); // Exclude applications for users
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Fetch a specific job with its applications (admin only)
module.exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const adminId = req.adminId;

    // Check if the job belongs to the admin
    const job = await Job.findOne({ _id: id, adminId });
    if (!job) {
      return res.status(404).json({ message: 'Job not found or unauthorized' });
    }

    res.status(200).json({ job });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Submit details for a job (user)
module.exports.applyForJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, details, experience } = req.body;
    // Find the job
    const job = await Job.findById(id);
    
    if (job.status !== "approved") {
      return res.status(400).json({ error: "Job is not approved yet" });
    }

    const application = { name, email, details };
    job.application.push(application); 
    await job.save();
    
    // Emit a Socket.io event
    const io = req.app.get('io'); 
    io.emit('newApplication', { jobId: id, application });

    res.status(201).json({ message: 'Application submitted successfully', job });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Validation rules for user submission
module.exports.validateSubmission = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('details').isObject().withMessage('Details must be an object'),
    body('experience').notEmpty().withMessage('Experience is required'),
  ];