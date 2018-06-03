const PubSub = require("../helpers/pub_sub.js");

const FormView = function(form){
  this.form = form;
  this.allData = null;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {
    // populate form with data from api
    const idValues = event.detail[0]._id;
    const carField = document.querySelector('#car');
    const carValues = event.detail[0].car;
    const trainField = document.querySelector('#train');
    const trainValues = event.detail[0].train;
    trainField.value = trainValues;
    carField.value = carValues;

    });

    // const form = document.querySelector('#form');

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('detail of submit:', evt.target.car.value);
      console.log('detail of submit:', evt.target.train.value);
      this.sendFormToModel(idValues,carValues, trainValues);
      //TODO fix broken updated data - data is not updating on click
  });
};

FormView.prototype.sendFormToModel = function(idValues,carValues,trainValues) {
  const allData = {
      _id: idValues,
      car: carValues,
      train: trainValues
  };
  PubSub.publish('FormView:updated-data-ready', values);
};

module.exports = FormView;
