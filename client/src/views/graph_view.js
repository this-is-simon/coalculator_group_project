const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const GraphView = function(){
};

GraphView.prototype.displayGraph = function (processedUserData) {
  const body = document.querySelector('#graph-view');
  const highchartGraphDiv = document.createElement('div');
  highchartGraphDiv.setAttribute('id', 'container');
  body.appendChild(highchartGraphDiv);
  Highcharts.chart('container', {

    chart: {
      type: 'bar',
      backgroundColor:'rgba(255, 255, 255, 0.8)'
    },
    title: {
      text: ''
    },
    legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'top',
            floating: false,
            // backgroundColor: 'rgba(255, 255, 255, 0.8)'
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
      },
      series: {
            pointPadding: 0.1,
            groupPadding: 0.1,
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Your Footprint',
      data: [processedUserData.car, processedUserData.train, processedUserData.plane, processedUserData.recycling, processedUserData.heating, processedUserData.pets, processedUserData.meat]
    }, {
      name: 'UK Average',
      data: [52.8, 1.46, 8.73, 1.8, 7.7, 2, 1.5]
    }]
  });

  return highchartGraphDiv;
};


module.exports = GraphView;
