'use-client';

// SliderComponent.tsx
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from '../Icons/Dropdown';
import Dropup from '../Icons/Dropup';

interface SliderComponentProps {
  title: string;
  min: number;
  max: number;
  step: number;
  onChange: (values: [number, number]) => void;
  value: number[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ title, min, max, step, onChange, value }) => {

  const [isExpanded, setIsExpanded] = useState(true);

  const fval1 = Intl.NumberFormat("en-US").format(value[0]);
  const fval2 = Intl.NumberFormat("en-US").format(value[1]);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-white rounded-md border border-[#d4d4d4]'>
      <div className="flex items-center mx-9">
        <h1 className="text-lg font-medium py-4 mr-auto">{title}</h1>
          <button onClick={handleButtonClick}>
            {isExpanded ? <Dropdown/> : <Dropup/>}
          </button>
      </div>
      {isExpanded && (
        <main className='pb-6'>
          <div className="h-7 border-t-2 border-[#d4d4d4]"></div>
          <div className='w-72 mx-auto'>
            <Slider
              min={min}
              max={max}
              step={step}
              onChange={(values) => onChange(values as [number, number])}
              allowCross = {false}
              value={value}
              range
              trackStyle={{ 
                backgroundColor: "#53389E", 
                height: 4,
                marginTop: 5,
              }}
              railStyle={{ 
                backgroundColor: "#D3D3D3", 
                height: 4,
                marginTop: 5,          
              }}
              handleStyle={{
                borderColor: "#53389E",
                position: 'absolute',
                borderWidth: 5,
                height: 24,
                width: 24,
                backgroundColor: "#CAC1E1"
              }}
              />
            <div className='mt-10 -ml-2 flex space-x-32'>
              <span className='w-[100px] h-9 px-3 rounded-md border-2 border-[#D3D3D3] text-center text-[#1A1A1A] font-medium pt-1'>{fval1}</span>
              <span className='w-[100px] h-9 px-3 rounded-md border-2 border-[#D3D3D3] text-center text-[#1A1A1A] font-medium pt-1'>{fval2}</span>        
            </div>
          </div>
        </main>
      )}      
    </div>
  );
};

export default SliderComponent;