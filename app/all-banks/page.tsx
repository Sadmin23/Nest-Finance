'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Bankcard from '../../components/Bankcard'
import Nav from '@/components/Nav';
import { Button } from 'antd';
import { items } from "./data"
import { useState } from 'react';

export default function CoursesPage() {
  const router = useRouter();

    const [searchValue, setSearchValue] = useState(''); // State to hold the search value
    const [data, setData] = useState(items[0]); // Initial data, change this as needed
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchValue(value);
    
      const foundItem = items.find((item) => item.bankName.includes(value));
    
      if (foundItem) {
        setData(foundItem);
      } else {
        setData(items[0]);
      }
    };

    const bigData = items
  
  return (
    <div className='bg-[#F2F4F7] flex-col'>
      <Nav bgOption='white'/>
      <div className='h-[1400px] flex-col'>
        <div className='flex'>
          <div className='flex-col'>
            <div className="pl-40 pt-16 font-inter mx-auto font-medium text-6xl absolute w-[900px] leading-tight">
              <h1>All your banking information in one place</h1>
            </div>
            <div className="pl-40 pt-56 w-[870px] font-inter font-medium text-base absolute">
              Managing your finances has never been easier with the convenience of centralized banking information.
               Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.              
            </div>
          </div>
          <div className='mr-0 ml-auto'>
              <Image
                src="/brand_assets/bg.png"
                width={480}
                height={600}
                alt="bg"
                />
          </div>
        </div>
        <div className='h-[960px] bg-white mx-40 rounded-xl flex-col'>
          <div className='py-10 border-b-2'>
            <h1 className='mx-10 font-inter text-2xl font-medium leading-5 '>Search Banks</h1>
          </div>
          <div className='flex mx-10 my-8'>
            <input
                className="w-[630px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4"
                placeholder="Search Banks"
                onChange={handleInputChange}            
              />
            <input
                className="w-[194px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4 ml-auto"
                placeholder="Filter by District"
            />
          </div>
          <div className="grid grid-cols-3 gap-5 mx-10">
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
            <Bankcard Name={data.bankName} image={data.image}/>
          </div>
        </div>
      </div>
    </div>
  );
}