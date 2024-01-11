import Slider from 'rc-slider';
import React, { useState } from 'react';
import 'rc-slider/assets/index.css';

type InputSliderProps = {
  onChange: (value: number | number[]) => void;
};

const InputSlider: React.FC<InputSliderProps> = ({ onChange }) => {

  return (
    <Slider onChange={onChange}
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
