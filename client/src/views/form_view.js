const PubSub = require("../helpers/pub_sub.js");

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {
    const carField = document.querySelector('#car');
    carField.value = event.detail[0].car;
    const trainField = document.querySelector('#train');
    trainField.value = event.detail[0].train;
  });
};

module.exports = FormView;
