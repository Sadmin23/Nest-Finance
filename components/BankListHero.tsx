'use client';
import Image from 'next/image';

const BankListHero = ({ n }: { n: number }): JSX.Element => {

  let content, mt

  switch (n) {
    case 1:
      content =           
      <Image
        src="/brand_assets/bankimage.png"
        width={369}
        height={600}
        alt="bg"
        className='ml-40'
      />
      mt = 'mt-8'
      break;
    case 2:
      content = 
      <Image
        src="/brand_assets/loan.png"
        width={356}
        height={46}
        alt="dhaka"
        className='ml-44'
      />
      mt = 'mt-[70px]'
      break;
  }

  return (
    <div className='flex mx-40 mb-9'>
        <div className='flex-col mt-[92px]'>
            <h1 className='text-[38px] font-semibold tracking-tight text-[#1D2939] w-[565px]'>All your banking information in one place</h1>
            <h2 className="mt-2 text-base font-normal leading-6 text-[#898989] w-[565px]">
            Managing your finances has never been easier with the convenience of centralized banking information.
            Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.              
            </h2>
            <h1 className={`text-2xl font-semibold tracking-tight leading-9 text-[#1D2939] ${mt}`}>Search Banks</h1>
        </div>
        <div className='mt-7'>
          {content}
        </div>
    </div>
  );
};

export default BankListHero;
