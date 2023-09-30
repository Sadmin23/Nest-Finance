'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Bankrow from '../../components/Bankrow'
import Nav from '@/components/Nav';

export default function BankDetails() {
  const router = useRouter();

  return (
    <div className='flex-col'>
      <Nav bgOption='white'/>
      <div className='bg-[#F2F4F7] '>
        <div className="h-[820px] bg-[#557F63] flex">
          <div className='w-3/5'>
            <div className="pl-40 pt-44 font-inter mx-auto font-medium text-7xl text-gray-50 absolute w-[900px] leading-tight">
              <h1>Best Saving Accounts Of August 2023</h1>
            </div>
            <div className="pl-40 pt-[380px] w-[870px] text-white font-inter font-medium text-base absolute">
              No single credit card is the best option for every family, purchase or budget. Forbes Advisor has chosen the best credit cards of 2023 to be the most helpful to the widest variety of readers. Rather than selecting the “best credit card” and ranking the next fifteen options, we highlighted the best credit card for multiple situations.
              <p className='pt-4'>This list contains only personal credit cards. If you’re looking for a credit card for your business, consider our list of the best business credit cards.</p>
            </div>
          </div>
          <div className='ml-5 mt-[150px]'>
            <Image
              src="/brand_assets/bank2.png"
              width={430}
              height={100}
              alt="bg"
            />
          </div>
        </div>
        <div className='h-[1700px]'>
          <div className='flex h-56 ml-40 mr-48 my-20 bg-white'>
            <Image
              src="/brand_assets/left2.png"
              width={227}
              height={100}
              alt="bg"
              className='block'
            />
            <div className='pl-10 pt-6'>
              <h1 className='text-[30px]'>Compare the best credit cards</h1>
              <h2 className='text-normal mt-4'>Choose the credit card of your choice from our extensive comparison features.</h2>
              <button className='rounded-[6px] w-[150px] h-10 mt-8 text-base font-normal text-white bg-[#53389E]'>Compare Now</button>
            </div>
            <Image
              src="/brand_assets/texture.png"
              width={280}
              height={100}
              alt="bg"
              className='mr-0 ml-auto'
            />
          </div>
          <div className='ml-40 mr-48 my-20 bg-white flex-col rounded-[8px]'>
            <div className='flex'>
              <h1 className='text-black font-inter font-medium text-2xl leading-10 tracking-tight w-96 px-10 py-12'>Best Credit Cards Of August 2023</h1>
              <svg className='ml-40 py-0' xmlns="http://www.w3.org/2000/svg" width="600" height="170" viewBox="0 0 749 170" fill="none">
                <path d="M0.919434 167.42C91.4783 167.42 -29.8038 175.367 255.849 146.164C541.501 116.96 343.89 1.09663 748.284 1.09656" stroke="url(#paint0_linear_159_47)" stroke-width="2" stroke-dasharray="12 12"/>
                <defs>
                  <linearGradient id="paint0_linear_159_47" x1="474.794" y1="-371.263" x2="474.794" y2="161.323" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B372C4"/>
                    <stop offset="1" stop-color="#8EE3D1"/>
                  </linearGradient>
                </defs>
              </svg>          
            </div>
            <div className='h-16 bg-[#EAECF0] flex py-5 font-medium'>
              <h1 className='ml-10'>Credit Card</h1>
              <div className='flex mr-24 ml-auto space-x-40'>
                <h1>Nerdwallet Rating</h1>
                <h1>APY</h1>
                <h1>Bonus</h1>
                <h1>Apply Now</h1>
              </div>
            </div>
            <Bankrow imageno={1}/>
            <Bankrow imageno={2}/>
            <Bankrow imageno={1}/>
            <Bankrow imageno={2}/>
            <Bankrow imageno={1}/>
          </div>
        </div>
      </div>
    </div>
  );
}