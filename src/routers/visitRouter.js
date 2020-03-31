const express = require('express');
const router = new express.Router();
const Visit = require('../models/visitModel');
router.get('/test', (req, res) => {
  res.send('From visitRouter file');
});

router.post('/visit', async (req, res) => {
  try {
    // create new model instance
    const visit = new Visit(req.body);
    // save new model instance to db
    await visit.save();
    // send response back to client
    res.status(201).send(visit);
  } catch (error) {
    res.status(404);
  }
});

/**
 * GET requests using req.query by:
 * name
 * userId
 *  OR all visit instances without req.query
 */
router.get('/visit', async (req, res) => {
  if (req.query.name) {
    const visit = await Visit.find({ name: req.query.name }).sort({ _id: -1 }).limit(5);
    res.json(visit);
  } else if (req.query.userId) {
    const visits = await Visit.find({ userId: req.query.userId });
    res.json(visits);
  } else {
    const visits = await Visit.find({});
    res.json(visits);
  }
});

// get visit by visitId
router.get('/visit/:id', async (req, res) => {
  try {
    const visit = await Visit.find({ _id: req.params.id });
    res.json(visit);
  } catch (error) {
    res.status(404);
  }
});

module.exports = router;
