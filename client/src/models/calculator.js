const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Calculator = function(data){
  this.data = data;
}

Calculator.prototype.formSubmitListener = function () {
  PubSub.subscribe('FormView:updated-data-ready', (evt)=>{
    this.updateData(evt.detail)
  });
};

Calculator.prototype.updateData = function (evt) {
  const request = new Request(this.url);
  request.put(evt, this.id)
};

module.exports = Calculator;
