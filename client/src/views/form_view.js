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

    const petsField0 = document.querySelector('#pets_0');
    const petsField1 = document.querySelector('#pets_1');
    const petsField2 = document.querySelector('#pets_2');
    const petsField3 = document.querySelector('#pets_3');
    const petsField4 = document.querySelector('#pets_4');
    const petsValues = event.detail[0].pets;

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

    switch(petsValues) {
    case '0':
        petsField0.checked = true;
        break;
    case '1':
        petsField1.checked = true;
        break;
    case '2':
        petsField2.checked = true;
        break;
    case '3':
        petsField3.checked = true;
        break;
    case '4':
        petsField4.checked = true;
        break;
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
      const petsValues = evt.target.pets.value;
      const meatValues = evt.target.meat.value;

      this.sendFormToModel(carValues, trainValues, planeValues, recycleValues, heatingValues, petsValues, meatValues);
  });
};

FormView.prototype.sendFormToModel = function(carValues, trainValues, planeValues, recycleValues, heatingValues, petsValues, meatValues) {
  const allData = {
      car: carValues,
      train: trainValues,
      plane: planeValues,
      recycle: recycleValues,
      heating: heatingValues,
      pets: petsValues,
      meat: meatValues
  };
  PubSub.publish('FormView:updated-data-ready', allData);
  console.log('AllData:',  allData);
};

module.exports = FormView;
