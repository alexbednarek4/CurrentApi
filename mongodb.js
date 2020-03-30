const mongodb = require('mongodb');
const assert = require('assert');

const { MongoClient } = mongodb;
const MONGODB_URL = 'mongodb://127.0.0.1:27017';
const dbName = 'current-app';

const client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true });
client.connect((err) => {
  assert.equal(null, err);
  console.log('Successfully connected current-app server');
});
