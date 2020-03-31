const express = require('express');

require('dotenv').config();

const app = express();
const { PORT } = process.env;
const mongoose = require('mongoose');
const visitRouter = require('./routers/visitRouter.js');
const { MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(visitRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
