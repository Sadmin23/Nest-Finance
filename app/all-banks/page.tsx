'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Bankcard from '../../components/Bankcard'
import Nav from '@/components/Nav';
import { Button } from 'antd';

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className='bg-[#F2F4F7] flex-col'>
      <Nav bgOption='white'/>
      <div className='h-[1800px] flex-col'>
        <div className='flex'>
          <div className='flex-col'>
            <div className="pl-40 pt-32 font-inter mx-auto font-medium text-6xl absolute w-[900px] leading-tight">
              <h1>All your banking information in one place</h1>
            </div>
            <div className="pl-40 pt-80 w-[870px] font-inter font-medium text-base absolute">
              Managing your finances has never been easier with the convenience of centralized banking information.
               Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.              
            </div>
          </div>
          <div className='mr-0 ml-auto'>
              <Image
                src="/brand_assets/bg.png"
                width={800}
                height={600}
                alt="bg"
                />
          </div>
        </div>
        <div className='h-[960px] bg-white mx-40 rounded-xl'>
        <div className="grid grid-cols-3 gap-5 mx-10">
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
          <Bankcard/>
        </div>
        </div>
      </div>
    </div>
  );
}
        {/* <div className="grid grid-cols-3 gap-4 mx-40">
          <div className="bg-blue-300 p-4">Item 1</div>
          <div className="bg-green-300 p-4">Item 2</div>
          <div className="bg-red-300 p-4">Item 3</div>
          <div className="bg-yellow-300 p-4">Item 4</div>
          <div className="bg-pink-300 p-4">Item 5</div>
          <div className="bg-purple-300 p-4">Item 6</div>
        </div> */}