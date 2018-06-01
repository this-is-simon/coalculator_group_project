const PubSub = require("../helpers/pub_sub.js");

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {
    console.log(event.detail);
  });
};

module.exports = FormView;
