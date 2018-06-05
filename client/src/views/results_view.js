const PubSub = require('../helpers/pub_sub.js');
const GraphView = require('./graph_view.js');

const ResultsView = function(resultsContainer){
  this.resultsContainer = resultsContainer;
};

ResultsView.prototype.getResults = function () {
  PubSub.subscribe('Calculator:displayable-total', (evt) => {
    this.resultsContainer.innerHTML = '';
    const displayableTotal = document.createElement('p');
    displayableTotal.textContent = `Your carbon footprint is ${evt.detail} tonnes a year.`;
    this.resultsContainer.appendChild(displayableTotal);
  });
};

ResultsView.prototype.bindEvents = function () {
  PubSub.subscribe('Calculator:processed-user-data', (evt) => {
    console.log('from results view, this is the subscribe', evt.detail);
    const highchartGraph = new GraphView();
    highchartGraph.displayGraph(evt.detail);
  })
};

module.exports = ResultsView;
