/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');

const router = Router();
const UploadEntry = require('../models/uploads');

router.get('/', (req, res) => {
  res.json({
    message: 'router working',
  });
});

router.post('/', async (req, res, next) => {
  try {
    const entry = new UploadEntry(req.body);
    const createdEntry = await entry.save();
    res.json(createdEntry);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
