import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

type PieChart3DProps = {
    principal: number
    interest: number
  };
  
const PieChart3D: React.FC<PieChart3DProps> = ({ principal, interest }) => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    am4core.addLicense("ch-custom-attribution");

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.PieChart3D);

    chart.radius = am4core.percent(90)

    // Set chart data
    chart.data = [
      { type: 'Total Interest', value: interest, color: '#F0EBFF' },
      { type: 'Principal Amount', value: principal, color: '#53389E' },
    ];

    chart.angle = 40
    chart.depth = 25
    
    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'type';
    series.slices.template.propertyFields.fill = 'color'; // Set slice color

    series.labels.template.text = "{category}\n[bold]{value}[/]";
    series.labels.template.fontSize = 10; // Set font size

    series.alignLabels = false
    series.labels.template.paddingTop = 35
    series.ticks.template.strokeWidth = 2;

    return () => {
      chart.dispose();
    };
  }, [interest, principal]);

  return (
    <div id="chartdiv" className='w-full mt-4'/>
    );
};

export default PieChart3D;