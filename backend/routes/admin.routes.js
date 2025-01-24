const express = require("express");
const adminController = require("../controllers/admin.controller");
const { authAdmin } = require("../middlewares/auth.middleware");
const Job = require("../models/job.model");

const router = express.Router();

router.post("/register", adminController.register);

router.post("/login", adminController.login);

router.get("/pending", authAdmin, async (req, res) => {
  try {
    const jobs = await Job.find({ status: "pending" }).populate("postedBy", "name email");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/jobs/approve/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/jobs/reject/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/logout", authAdmin, adminController.logoutAdmin);

module.exports = router;
