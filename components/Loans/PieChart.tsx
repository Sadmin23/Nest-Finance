import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts3D from 'highcharts/highcharts-3d'

export default function PieChart() {

  if (typeof Highcharts === 'object'){
    Highcharts3D(Highcharts)
  }
  const options = {
    chart: {
      type : 'pie',
      height : 320,
      options3d: {
        enabled: true,
        alpha: 50,
        beta: 0
      }
    },
    title: '',
    colors: ['#F0EBFF','#53389E'],
    plotOptions: {
      pie: {
        depth: 55,
        startAngle: 50,
        slicedOffset: 25,
        center: [150,100],
        dataLabels: {
          connectorColor: '#53389E',
          enabled: false,
          format: '<b>{point.name}</b>: {point.y}',
          pointFormat: '<b>{point.name}</b>:<br/>{point.y}',
          color: 'black',
          style: {
            fontSize: '12px', // Set the font size for data labels
          }
        }
      }
    },
    series: [{
      type: 'pie',
      data: [
        {
          name: 'Total Interest', 
          y: 112000,
          sliced: true,
          selected: true
        },
        {
          name: 'Principle Amount', 
          y: 700000,
        }
      ]
    }
  ],
    credits: {
      enabled: false
    }
  }

  return (
    <div className="w-full">
      <HighchartsReact highcharts={Highcharts} options={options}
      />
    </div>
  );
}