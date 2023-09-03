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
      <div className="h-[1800px] relative">
        <div className="flex h-[450px]">
          <div className="flex-col">
            <div className="pl-40 pt-32 font-inter mx-auto font-medium text-6xl absolute w-[600px] leading-tight">
              <h1>Compare Credit Cards</h1>
            </div>
            <div className="pl-40 pt-80 w-[800px] font-inter font-medium text-base absolute">
              This list contains only personal credit cards. If you’re looking for a
              credit card for your business, consider our list of the best business
              credit cards.
            </div>
          </div>
          <div className="mr-0 ml-auto">
            <Image src="/brand_assets/bg.png" width={800} height={600} alt="bg" />
          </div>
        </div>
        <div className="h-[960px] bg-white mx-40 rounded-xl mt-0 flex-col relative z-10">
          <div className="py-8 border-b-2 mx-10">
            <h1 className="font-inter text-2xl font-medium leading-5">
              Select the credit cards you want to compare
            </h1>
            <h2 className='mt-4'>Choose the credit card of your choice from our extensive comparison features.</h2>
          </div>
          <div className="flex mx-10 my-8">
            <input
              className="w-[630px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4"
              placeholder="Search Credit Card"
              style={{}}
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mx-10"></div>
        </div>
      </div>
    </div>
  );
}