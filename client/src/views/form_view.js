const PubSub = require("../helpers/pub_sub.js");

const FormView = function(form){
  this.form = form;
  this.allData = null;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {

    const carField = document.querySelector('#car');
    const carValues = event.detail[0].car;
    const trainField = document.querySelector('#train');
    const trainValues = event.detail[0].train;
    const meatDropdown = document.querySelector('#meatDropdown');
    const meatValues = event.detail[0].meat;
    trainField.value = trainValues;
    carField.value = carValues;
    meatDropdown.value = meatValues

    });

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const carValues = evt.target.car.value;
      const trainValues = evt.target.train.value;
      this.sendFormToModel(carValues, trainValues);
  });
};

FormView.prototype.sendFormToModel = function(carValues, trainValues) {
  const allData = {
      car: carValues,
      train: trainValues
  };
  PubSub.publish('FormView:updated-data-ready', allData);
  console.log('allData:', allData);
};

module.exports = FormView;
