use co2Database;
db.dropDatabase();

db.co2Collection.insertOne({
  car: 'I am a car',
  train: 'I am a train',
  plane: 'I am a plane',
  recycle: '0.6',
  heating: '8.1',
  pets: '0',
  meat: '0'
});
