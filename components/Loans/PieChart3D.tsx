import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

type PieChart3DProps = {
  principal: number
  interest: number
};

const PieChart3D: React.FC<PieChart3DProps> = ({ principal, interest }) => {
  const chartRef = useRef<am4charts.PieChart3D | null>(null);

  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    am4core.addLicense("ch-custom-attribution");

    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.PieChart3D);
    chartRef.current = chart;

    chart.radius = am4core.percent(90);
    chart.angle = 40
    chart.depth = 25

    // Create series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.category = 'type';
    series.slices.template.propertyFields.fill = 'color'; // Set slice color

    series.labels.template.text = "{category}\n[bold]{value}[/]";
    series.labels.template.fontSize = 10; // Set font size

    series.alignLabels = false;
    series.labels.template.paddingTop = 35;
    series.ticks.template.strokeWidth = 2;
    series.ticks.template.stroke = am4core.color("##53389E");
    series.labels.template.radius = 5

    series.slices.template.isActive = (slice) => slice.dataItem?.dataContext.type === 'Total Interest';

// This creates initial animation
    series.hiddenState.properties.opacity = 1;
    series.hiddenState.properties.endAngle = -90;
    series.hiddenState.properties.startAngle = -90;

    var slice = series.slices.template;
    slice.states.getKey("hover").properties.scale = 1;
    slice.states.getKey("active").properties.shiftRadius = 0;

    return () => {
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    // Update chart data and animate the transition
    if (chartRef.current) {
      chartRef.current.data = [
        { type: 'Total Interest', value: interest, color: '#F0EBFF' },
        { type: 'Principal Amount', value: principal, color: '#53389E' },
      ];
      chartRef.current.animate({ property: 'data', to: chartRef.current.data }, 10); // Adjust the duration as needed
    }
  }, [interest, principal]);

  return (
    <div id="chartdiv" className='w-full mt-4 h-96 xl:h-72'/>
  );
};

export default PieChart3D;