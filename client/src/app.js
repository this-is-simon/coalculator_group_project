const Co2Data = require('./models/co2.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("hola bitchachos: Content Loaded");
  const form = document.querySelector('#form');

  const url = 'http://localhost:3000/api/co2';
  const co2Data = new Co2Data(url);
  co2Data.getData();
});
