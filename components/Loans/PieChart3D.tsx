import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const PieChart3D = () => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    am4core.addLicense("ch-custom-attribution");

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.PieChart3D);

    chart.radius = am4core.percent(80)

    chart.hiddenState.properties.opacity = 0;

    // Set chart data
    chart.data = [
      { type: 'Total Interest', value: 112000, color: '#F0EBFF' },
      { type: 'Principal Amount', value: 700000, color: '#53389E' },
    ];

    chart.angle = 40

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'type';
    series.slices.template.propertyFields.fill = 'color'; // Set slice color

    series.labels.template.text = "{category}\n[bold]{value}[/]";


    // Adjust label style
    series.labels.template.fontSize = 10; // Set font size

    // Cleanup function
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" className='w-full'/>
    );
};

export default PieChart3D;