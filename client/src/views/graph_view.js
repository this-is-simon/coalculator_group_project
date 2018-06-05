const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const GraphView = function(){
};

GraphView.prototype.displayGraph = function (processedUserData) {
console.log(processedUserData);
  const body = document.querySelector('#graph-view');
  const highchartGraphDiv = document.createElement('div');
  highchartGraphDiv.setAttribute('id', 'container');
  body.appendChild(highchartGraphDiv);
  Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Car', 'Train', 'Flights', 'Recycling', 'Heating', 'Pets', 'Diet'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'CO2 (tonnes)',
        align: 'middle'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' tonnes'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Your Carbon Footprint',
      data: [60, 6.48, 11.64, 0.6, 8.1, 1, 1]
    }, {
      name: 'UK Average Carbon Footprint',
      data: [52.8, 1.46, 8.73, 1.8, 7.7, 2, 1.5]
    }]
  });
  debugger

  return highchartGraphDiv;
};


module.exports = GraphView;
