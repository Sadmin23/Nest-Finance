'use client';
import Image from 'next/image';

const BankSearch = (): JSX.Element => {
  return (
    <div className='flex-col mx-40 mt-[70px]'>
        <h1 className='text-2xl font-semibold tracking-tight leading-9 text-[#1D2939]'>All Banks</h1>
        <div className='border-t-2'>
            <div contentEditable={true} className="border-2 border-[#B3B3B3] h-14 w-[492px] rounded-xl mt-9 text-[#B3B3B3]">
              Enter your email here...
            </div>
        </div>
    </div>
  );
};

export default BankSearch;
