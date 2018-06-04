const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Calculator = function(){
}

Calculator.prototype.formSubmitListener = function () {
  PubSub.subscribe('FormView:updated-data-ready', (evt)=>{
    this.calculateData(evt.detail)
  });
};

Calculator.prototype.calculateData = function (evt) {
  const totalCarCo2Tonnes = this.calculateCo2Tonnage(evt.car, 0.0066);
  const totalTrainCo2Tonnes = (this.calculateCo2Tonnage(evt.train, 0.0027)) * 12;
  const totalPlaneCo2Tonnes = this.calculateCo2Tonnage(evt.plane, 5.82);
  const totalRecyclingTonnes = evt.recycle * 1;
  const totalHeatingTonnes = evt.heating * 1;
  const totalPetsTonnes = evt.pets * 1;
  const totalMeatTonnes = evt.meat * 1;

  const complexTotals = this.calculateTotalCo2Tonnage(totalCarCo2Tonnes, totalTrainCo2Tonnes, totalPlaneCo2Tonnes);
  const simpleTotals = totalRecyclingTonnes + totalHeatingTonnes + totalPetsTonnes + totalMeatTonnes;

  const displayableTotal = complexTotals + simpleTotals;

  PubSub.publish('Calculator:displayable-total', displayableTotal);

};

Calculator.prototype.calculateTotalCo2Tonnage = function (totalCar, totalTrain, totalPlane) {
  return totalCar + totalTrain + totalPlane;
};

Calculator.prototype.calculateCo2Tonnage = function (factor, multiplier) {
  return factor * multiplier;
};

module.exports = Calculator;
