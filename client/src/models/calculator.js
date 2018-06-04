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
  const totalCarCo2Tonnes = this.calculateCar(evt);
};

Calculator.prototype.calculateCar = function (evt) {
  return evt.car * 0.006;
};

module.exports = Calculator;
