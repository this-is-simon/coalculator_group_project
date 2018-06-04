use co2Database;
db.dropDatabase();

db.co2Collection.insertOne({
  car: null,
  train: null,
  plane: null,
  recycle: 0,
  meat: 0
});
