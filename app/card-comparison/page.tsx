'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CreditCard from '../../components/CreditCard'
import ApplyCard from '../../components/ApplyCard'
import CreditScore from '../../components/CreditScore'
import TableRow from '../../components/TableRow'
import Nav from '@/components/Nav';
import { items } from "./data"
import { Button } from 'antd';
import { useEffect, useState } from 'react';

export default function CoursesPage() {
  const router = useRouter();

  const ITEMS_PER_PAGE = 3

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState<any[]>([]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.bankName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filtered);

    setCurrentPage(1);
  }, [searchValue]);

  const itemsToDisplay = searchValue ? filteredItems : items;

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentItems = itemsToDisplay.slice(firstIndex, lastIndex);

  const handleNextPage = () => {
    if (lastIndex < itemsToDisplay.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='bg-[#F2F4F7] flex-col'>
      <Nav bgOption='white'/>
      <div className="h-[24533930px] relative">
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
        <div className="bg-white mx-40 rounded-xl mt-0 flex-col relative z-10">
          <div className="pt-10 border-b-2 ">
            <h1 className="font-inter mx-10 text-2xl font-medium leading-5">
              Select the credit cards you want to compare
            </h1>
            <h2 className='my-5 mx-10'>Choose the credit card of your choice from our extensive comparison features.</h2>
          </div>
          <div className="flex mx-10 my-8">
            <input
              className="w-[630px] border-[1px] border-[#D0D5DD] h-10 rounded-md font-medium text-sm leading-5 pl-4"
              placeholder="Search Credit Card"
              onChange={handleInputChange}
          />
          </div>
          <div className="grid grid-cols-3 gap-5 mx-10">
            {currentItems.map((data, index) => (
              <CreditCard key={index} Name={data.bankName} image={data.image} />
            ))}          
          </div>
          <div className='mt-20 mx-10'>
          <Button onClick={handlePrevPage}>
            Previous
          </Button>
          <Button onClick={handleNextPage}>
            Next
          </Button>
          </div>
          <div className="grid grid-cols-[13fr,29fr,29fr,29fr] mt-20">
            <div className="col-span-1 border-t-2">
            </div>
            <ApplyCard/>
            <ApplyCard/>
            <ApplyCard/>
          </div>
          <div className='bg-[#D0D5DD] h-14 py-4'>
            <h2 className='font-medium text-[18px] leading-6 ml-10'>Recommended Credit Score</h2>
          </div>
          <div className="grid grid-cols-[13fr,29fr,29fr,29fr]">
            <div className="col-span-1 border-t-2">
            </div>
            <CreditScore/>
            <CreditScore/>
            <CreditScore/>
          </div>
          <div className='bg-[#D0D5DD] h-14 py-4'>
            <h2 className='font-medium text-[18px] leading-6 ml-10'>Great For</h2>
          </div>
          <TableRow text='Airline' t1={0} t2={0} t3={0}/>
          <TableRow text='Bonus Credit' t1={1} t2={0} t3={1}/>
          <TableRow text='Bonus offers' t1={0} t2={0} t3={0}/>
          <TableRow text='Airline' t1={0} t2={0} t3={0}/>
          <TableRow text='Airline' t1={0} t2={0} t3={0}/>
          <div className='bg-[#D0D5DD] h-14 py-4'>
            <h2 className='font-medium text-[18px] leading-6 ml-10'>Annual Fee</h2>
          </div>
          <div className="grid grid-cols-[13fr,29fr,29fr,29fr]">
            <div className="col-span-1 border-t-2">
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-base">
              <h2 className='text-center my-4'>$200</h2>
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-base">
              <h2 className='text-center my-4'>$200</h2>
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-base">
              <h2 className='text-center my-4'>$200</h2>
            </div>
          </div>
          <div className='bg-[#D0D5DD] h-14 py-4'>
            <h2 className='font-medium text-[18px] leading-6 ml-10'>Rewards rate</h2>
          </div>
          <div className="grid grid-cols-[13fr,29fr,29fr,29fr]">
            <div className="col-span-1 border-t-2">
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-sm">
              <h2 className='mt-4 mx-9 mb-16'>Enjoy benefits such as a $50 annual Ultimate Rewards Hotel Credit,
               5x on travel purchased through Chase Ultimate Rewards®,
                3x on dining and 2x on all other travel purchases, plus more.</h2>
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-sm">
              <h2 className='mt-4 mx-9 mb-16'>Enjoy benefits such as a $50 annual Ultimate Rewards Hotel Credit,
               5x on travel purchased through Chase Ultimate Rewards®,
                3x on dining and 2x on all other travel purchases, plus more.</h2>
            </div>
            <div className="col-span-1 border-l-2 border-t-2 font-inter font-medium text-sm">
              <h2 className='mt-4 mx-9 mb-16'>Enjoy benefits such as a $50 annual Ultimate Rewards Hotel Credit,
               5x on travel purchased through Chase Ultimate Rewards®,
                3x on dining and 2x on all other travel purchases, plus more.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}