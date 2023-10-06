'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from 'antd';
import Buttons from './Buttons';

const Options = (): JSX.Element => {
  return (
    <div className='bg-white rounded-xl my-16 flex items-center justify-center space-x-6 mx-52'>
        <Buttons x={1}/>
        <Buttons x={2}/>
        <Buttons x={3}/>
        <Buttons x={4}/>
        <Buttons x={5}/>
        <Buttons x={6}/>
    </div>
  );
};

export default Options;