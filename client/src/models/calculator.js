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
  console.log(totalCarCo2Tonnes);
};

Calculator.prototype.calculateCo2Tonnage = function (factor, multiplier) {
  return factor * multiplier;
};

module.exports = Calculator;
