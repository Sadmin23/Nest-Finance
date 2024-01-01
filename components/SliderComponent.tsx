'use-client';

// SliderComponent.tsx
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Dropdown from './Icons/Dropdown';
import Dropup from './Icons/Dropup';

interface SliderComponentProps {
  title: string;
  min: number;
  max: number;
  onChange: (values: [number, number]) => void;
  value: number[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ title, min, max, onChange, value }) => {

  const [isExpanded, setIsExpanded] = useState(true);

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
              onChange={(values) => onChange(values as [number, number])}
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
              <span className='w-[100px] h-[50px] rounded-md border-2 border-[#D3D3D3] text-center text-[#1A1A1A] font-medium py-3'>{value[0]}</span>
              <span className='w-[100px] h-[50px] rounded-md border-2 border-[#D3D3D3] text-center text-[#1A1A1A] font-medium py-3'>{value[1]}</span>        
            </div>
          </div>
        </main>
      )}      
    </div>
  );
};

export default SliderComponent;