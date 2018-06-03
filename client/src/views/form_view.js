const PubSub = require("../helpers/pub_sub.js");

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {
    // populate form with data from api
    const carField = document.querySelector('#car');
    const carValues = event.detail[0].car;
    carField.value = carValues;
    const trainField = document.querySelector('#train');
    const trainValues = event.detail[0].train;
    trainField.value = trainValues

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      this.sendFormToAPI(carValues, trainValues);
    });
  });
};

FormView.prototype.sendFormToAPI = function(car,train) {
  console.log(car);
  console.log(train);
}

module.exports = FormView;
