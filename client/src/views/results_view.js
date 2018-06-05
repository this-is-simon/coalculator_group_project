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

    const highchartGraph = new GraphView();
    highchartGraph.displayGraph();

  });
};

module.exports = ResultsView;
