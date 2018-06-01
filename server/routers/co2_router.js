const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const co2Router = function(co2Database) {

  router.get('/', (req, res) => {
    co2Database.find().toArray()
      .then((docs) => res.json(docs));
  });

  // router.put('/:id', (req, res) => {
  //   const id = req.params.id;
  //   const updatedCountry = req.body;
  //   countriesCollection
  //     .updateOne(
  //       { _id: ObjectID(id) },
  //       { $set: updatedCountry }
  //     )
  //       .then(() => {
  //         countriesCollection
  //          .find()
  //          .toArray()
  //          .then((docs) => res.json(docs));
  //       });
  // });

  return router;
}

module.exports = co2Router;
