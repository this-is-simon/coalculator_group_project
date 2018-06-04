const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const co2Router = function(co2Collection) {

  // router.post('/', (req, res) => {
  //   const newCo2Data = req.body;
  //   co2Collection
  //     .insertOne(newCo2Data)
  //     .then(()=> {
  //       co2Collection
  //         .find()
  //         .toArray()
  //         .then((docs) => res.json(docs))
  //     });
  // });

  router.get('/', (req, res) => {
    co2Collection
      .find()
      .toArray()
      .then((docs) => res.json(docs));
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedCo2 = req.body;
    co2Collection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedCo2 }
      )
      .then(() => {
        co2Collection
         .find()
         .toArray()
         .then((docs) => res.json(docs));
      });
  });

  return router;
}

module.exports = co2Router;
