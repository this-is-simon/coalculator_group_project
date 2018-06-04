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

    const recycleFieldYes = document.querySelector('#recycle_yes');
    const recycleFieldNo = document.querySelector('#recycle_no');
    const recycleValues = event.detail[0].recycle;

    const heatingFieldOn = document.querySelector('#heating_on');
    const heatingFieldTimer = document.querySelector('#heating_timer');
    const heatingFieldOff = document.querySelector('#heating_off');
    const heatingValues = event.detail[0].heating;
    const meatDropdown = document.querySelector('#meatDropdown');
    const meatValues = event.detail[0].meat;

    // const recycleSelected = (recycleValues === '0.6');
    // recycleFieldYes.checked = recycleSelected;
    // recycleFieldNo.checked = !recycleSelected;

    if (recycleValues === '0.6') {
      recycleFieldYes.checked = true;
    } else {
      recycleFieldNo.checked = true;
    };

    if (heatingValues === '8.1'){
      heatingFieldOn.checked = true;
    } else if (heatingValues === '7.7') {
      heatingFieldTimer.checked = true;
    } else {
      heatingFieldOff.checked = true;
    };


    trainField.value = trainValues;
    carField.value = carValues;
    planeField.value = planeValues;
    meatDropdown.value = meatValues;
    });

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const carValues = evt.target.car.value;
      const trainValues = evt.target.train.value;
      const planeValues = evt.target.plane.value;
      const recycleValues = evt.target.recycle.value;
      const heatingValues = evt.target.heating.value;
      const meatValues = evt.target.meat.value;

      this.sendFormToModel(carValues, trainValues, planeValues, recycleValues, heatingValues, meatValues);
  });
};

FormView.prototype.sendFormToModel = function(carValues, trainValues, planeValues, recycleValues, heatingValues, meatValues) {
  const allData = {
      car: carValues,
      train: trainValues,
      plane: planeValues,
      recycle: recycleValues,
      heating: heatingValues,
      meat: meatValues
  };
  PubSub.publish('FormView:updated-data-ready', allData);
  console.log('AllData:',  allData);
};

module.exports = FormView;
