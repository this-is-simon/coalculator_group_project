const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Calculator = function(){
}

Calculator.prototype.formSubmitListener = function () {
  PubSub.subscribe('FormView:updated-data-ready', (evt)=>{
    const userDataResult = this.groupUserData(evt.detail);
    this.calculateData(userDataResult);
  });
};

Calculator.prototype.groupUserData = function (evt) {
  const totalCarCo2Tonnes = this.calculateCo2Tonnage(evt.car, 0.0066);
  const totalTrainCo2Tonnes = (this.calculateCo2Tonnage(evt.train, 0.0027)) * 12;
  const totalPlaneCo2Tonnes = this.calculateCo2Tonnage(evt.plane, 5.82);
  const totalRecyclingTonnes = evt.recycle * 1;
  const totalHeatingTonnes = evt.heating * 1;
  const totalPetsTonnes = evt.pets * 1;
  const totalMeatTonnes = evt.meat * 1;

  const processedUserData = {
    car: totalCarCo2Tonnes,
    train: totalTrainCo2Tonnes,
    plane: totalPlaneCo2Tonnes,
    recycling: totalRecyclingTonnes,
    heating: totalHeatingTonnes,
    pets: totalPetsTonnes,
    meat: totalMeatTonnes
  }

  PubSub.publish('Calculator:processed-user-data', processedUserData);

  return processedUserData;
}

Calculator.prototype.calculateData = function (processedUserData) {
  let co2Total = 0;
  for (item in processedUserData) {
    co2Total += processedUserData[item];
  };

  const displayableTotal = parseFloat( co2Total.toFixed(2) );

  PubSub.publish('Calculator:displayable-total', displayableTotal);
};

Calculator.prototype.calculateCo2Tonnage = function (factor, multiplier) {
  return factor * multiplier;
};

module.exports = Calculator;
