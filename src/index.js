const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb://127.0.0.1:27017/current-app';

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
const Visit = require('./models/visitModel.js');

app.post('/visit', async (req, res) => {
  console.log(req.body);
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
app.get('/visit', async (req, res) => {

  if (req.query.name) {
    const visit = await Visit.find({ name: req.query.name }).limit(5);
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
app.get('/visit/:id', async (req, res) => {
  const visit = await Visit.find({ _id: req.params.id });
  res.json(visit);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});