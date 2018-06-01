const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Co2Data = function(url){
  this.url = url;
}

Co2Data.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((co2Collection) => {
    PubSub.publish('co2Collection:data-loaded', co2Collection);
  })
  .catch(console.error);
};
