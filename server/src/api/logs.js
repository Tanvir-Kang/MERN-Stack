/* eslint linebreak-style: ["error", "windows"] */
const { Router, json } = require('express');

const router = Router();
const UploadEntry = require('../models/uploads');
/*
router.get('/', (req, res) => {
  res.json({
    message: 'router working',
  });
});
*/
router.get('/', async (req, res, next) => {
  try {
    const entries = await UploadEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = new UploadEntry(req.body);
    const createdEntry = await entry.save();
    res.json(createdEntry);
  } catch (error) {
    res.status(422);
    next(error);
  }
});

module.exports = router;
