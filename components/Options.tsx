'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from 'antd';
import Buttons from './Buttons';

const Options = (): JSX.Element => {
  return (
    <div className='bg-white rounded-xl my-16 flex items-center justify-center space-x-6 mx-52'>
        <Buttons/>
        <Button className='w-40 h-32 border-purple-800 border-2'>Hello</Button>
        <Button className='w-40 h-32 border-purple-800 border-2'>Hello</Button>
        <Button className='w-40 h-32 border-purple-800 border-2'>Hello</Button>
        <Button className='w-40 h-32 border-purple-800 border-2'>Hello</Button>
        <Button className='w-40 h-32 border-purple-800 border-2'>Hello</Button>
    </div>
  );
};

export default Options;