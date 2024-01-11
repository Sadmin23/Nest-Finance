import Slider from 'rc-slider';
import React, { useState } from 'react';
import 'rc-slider/assets/index.css';

type InputSliderProps = {
  type: number
  value: number
  onChange: (type:number, value: number) => void;
};

const InputSlider: React.FC<InputSliderProps> = ({ type, value, onChange }) => {

  let max, step

  if (type === 1){
    max = 1000000
    step = 50000

  } else if (type === 2){
    max = 50
    step = 2.5

  } else if (type === 3){
    max = 60
    step = 6

  } else if (type === 4){
    max = 5
    step = 1

  }

  return (
    <Slider onChange={onChange} max={max} step={step} min={0} value={value}
    trackStyle={{ 
      backgroundColor: "#53389E", 
      height: 4,
      marginTop: 1
    }}
    railStyle={{ 
      backgroundColor: "#D3D3D3", 
      height: 4,
      marginTop: 1
    }}
    handleStyle={{
      borderColor: "#53389E",
      position: 'absolute',
      borderWidth: 4,
      height: 16,
      width: 16,
      backgroundColor: "#CAC1E1"
    }}
    />
  );
};

export default InputSlider;
