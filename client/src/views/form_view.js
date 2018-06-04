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
    const planeField = document.querySelector('#plane');
    const planeValues = event.detail[0].plane;
    const recycleField = document.querySelector('input[name="recycle"]:checked');
    const recycleValues = event.detail[0].value;
    const meatDropdown = document.querySelector('#meatDropdown');
    const meatValues = event.detail[0].meat;

    trainField.value = trainValues;
    carField.value = carValues;
    planeField.value = planeValues;
    recycleField.value = recycleValues;
    meatDropdown.value = meatValues;
    console.log('recycleValues:', recycleValues);
    });

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const carValues = evt.target.car.value;
      const trainValues = evt.target.train.value;
      const planeValues = evt.target.plane.value;
      const recycleValues = evt.target.recycle.value;
      const meatValues = evt.target.meat.value;

      this.sendFormToModel(carValues, trainValues, planeValues, recycleValues,  meatValues);
  });
};

FormView.prototype.sendFormToModel = function(carValues, trainValues, planeValues, recycleValues, meatValues) {
  const allData = {
      car: carValues,
      train: trainValues,
      plane: planeValues,
      recycle: recycleValues,
      meat: meatValues
  };
  PubSub.publish('FormView:updated-data-ready', allData);
  console.log('AllData:',  allData);
};

module.exports = FormView;
