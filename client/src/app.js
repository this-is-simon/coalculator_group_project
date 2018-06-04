const Co2Data = require('./models/co2.js');
const Calculator = require('./models/calculator.js');
const FormView = require('./views/form_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("hola bitchachos: Content Loaded");
  const form = document.querySelector('#form');

  const formView = new FormView(form);
  formView.bindEvents();

  const url = 'http://localhost:3000/api/co2';
  
  const co2Data = new Co2Data(url);
  co2Data.formSubmitListener();
  const calculator = new Calculator();
  calculator.formSubmitListener();

  co2Data.getData();
});
