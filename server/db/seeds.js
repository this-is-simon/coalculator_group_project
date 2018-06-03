use co2Database;
db.dropDatabase();

db.co2Collection.insertOne({
  car: null,
  train: null,
  meat: 0
});
