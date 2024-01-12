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
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.radius = am4core.percent(100)

    chart.width = am4core.percent(100)

    let x = 20

    // Set chart data
    chart.data = [
      { type: 'Total Interest', value: x, color: '#F0EBFF' },
      { type: 'Principal Amount', value: 100-x, color: '#53389E' },
    ];

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'type';
    series.slices.template.propertyFields.fill = 'color'; // Set slice color

    series.labels.template.text = "{category}\n{value}";

    // Cleanup function
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" className='w-full h-full mt-14 ml-14'/>
    );
};

export default PieChart3D;