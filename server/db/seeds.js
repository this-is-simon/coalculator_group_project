use co2Database;
db.dropDatabase();

db.co2Collection.insertOne({
  car: '0',
  train: '0',
  plane: '0',
  recycle: '0.6',
  heating: '8.1',
  pets: '0',
  meat: '0'
});
