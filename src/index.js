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

app.post('/visit', (req, res) => {
  console.log(req.body);
  const visit = new Visit(req.body);
  visit.save();
  res.send(visit);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
