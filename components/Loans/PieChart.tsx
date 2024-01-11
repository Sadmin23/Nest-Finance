import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts3D from 'highcharts/highcharts-3d'

type PieChartProps = {
  principal: number
  interest: number
};

const PieChart: React.FC<PieChartProps> = ({ principal, interest }) => {

  if (typeof Highcharts === 'object'){
    Highcharts3D(Highcharts)
  }
  const options = {
    chart: {
      type : 'pie',
      height : 300,
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
        center: [200,80],
        showInLegend: true,
        dataLabels: {
          connectorColor: '#53389E',
          enabled: true,
          pointFormat: '{point.y}',
          color: 'black',
          style: {
            fontSize: '12px', // Set the font size for data labels
          },
          
          distance: -30,
          y : -5
        }
      }
    },
    series: [{
      type: 'pie',
      data: [
        {
          name: 'Total Interest', 
          y: interest,
          sliced: true,
          selected: true
        },
        {
          name: 'Principle Amount', 
          y: principal,
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

export default PieChart;