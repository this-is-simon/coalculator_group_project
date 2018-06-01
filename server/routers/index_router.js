const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const co2Router = require('./co2_router.js')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('co2Database');
  const co2Collection = db.collection('co2Collection');
  router.use('/api/co2', co2Router(co2Collection));
});

module.exports = router;
