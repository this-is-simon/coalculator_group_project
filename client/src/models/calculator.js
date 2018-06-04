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
  console.log('calculator data:', evt);
};

module.exports = Calculator;
