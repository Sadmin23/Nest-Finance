'use client';
import Image from 'next/image';

const BankListHero = (): JSX.Element => {
  return (
    <div className='flex mx-40 mt-16'>
        <div className='flex-col'>
            <h1 className='text-[44px] font-semibold tracking-tight leading-normal text-[#1D2939] w-[600px]'>All your banking information in one place</h1>
            <h2 className="mt-6 text-base font-normal leading-6 text-[#898989] w-[645px]">
            Managing your finances has never been easier with the convenience of centralized banking information.
            Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.              
            </h2>
        </div>
        <div className='ml-36'>
            <Image
                src="/brand_assets/bankimage.png"
                width={369}
                height={600}
                alt="bg"
            />
        </div>
    </div>
  );
};

export default BankListHero;
