const PubSub = require("../helpers/pub_sub.js");

const FormView = function(element){
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  PubSub.subscribe('co2Collection:data-loaded', (event) => {
    // populate form with data from api
    const carField = document.querySelector('#car');
    carField.value = event.detail[0].car;
    const trainField = document.querySelector('#train');
    trainField.value = event.detail[0].train;

    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      // this.sendFormToAPI(event);
    });
  });
};

// FormView.prototype.sendFormToAPI =

module.exports = FormView;
