'use-client';

// SliderComponent.tsx
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface SliderComponentProps {
  min: number;
  max: number;
  onChange: (values: [number, number]) => void;
  value: [number, number];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ min, max, onChange, value }) => {
  return (
    <div>
      <Slider
        min={min}
        max={max}
        onChange={(values) => onChange(values as [number, number])}
        value={value}
        range
      />
      <div>
        <span>Min: {value[0]}</span>
        <span>Max: {value[1]}</span>
      </div>
    </div>
  );
};

export default SliderComponent;