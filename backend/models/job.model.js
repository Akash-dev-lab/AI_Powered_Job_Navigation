const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
  applications: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // If you have a User model
      },
      name: String,
      email: String,
      details: Object, // Custom fields for the job
      submittedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', jobSchema);