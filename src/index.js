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
// const { Visit } = require('./models/visitModel.js');

// app.post('/visit', async (req, res) => {
//   const visit = new Visit(req.body);
//   try {
//     await visit.save();
//     res.status(201).send(visit);
//   } catch (error) {
//     res.status(400).send();
//   }
// });


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
