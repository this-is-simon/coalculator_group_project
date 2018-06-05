const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const GraphView = function(){
};

GraphView.prototype.displayGraph = function () {

  const body = document.querySelector('body');
  const highchartGraphDiv = document.createElement('div');
  highchartGraphDiv.setAttribute('id', 'container');
  body.appendChild(highchartGraphDiv);

  Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Historic World Population by Region'
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
        align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 400, 2]
    }, {
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
    }, {
      name: 'Year 2000',
      data: [814, 20, 3714, 727, 31]
    }, {
      name: 'Year 2016',
      data: [1216, 81, 4436, 738, 40]
    }]
  });
  return highchartGraphDiv;
};


module.exports = GraphView;
