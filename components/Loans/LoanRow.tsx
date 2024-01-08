'use client';

import Image from 'next/image';
import LinkButton from '../Buttons/LinkButton';
import CompareButton from '../Buttons/Comparebutton';
import { useState } from 'react';
import DetailDown from '../Icons/DetailDown';
import DetailUp from '../Icons/DetailUp';

const LoanRow = (): JSX.Element => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-[764px] rounded-md border-2 border-[#D4D4D4]'>
      <div className="bg-white rounded-md h-[200px] flex py-5">
          <div className='w-[192px] border-r-2'>
            <Image
              src="/brand_assets/city.png"
              width={86}
              height={70}
              alt="brac"
              className='mx-auto'
            />
            <h2 className='text-[#1A1A1A] text-[18px] font-semibold text-center'>City Double Loan</h2>
            <button className='rounded-md border-2 border-[#CAC1E1] text-[#53389E] bg-white text-xs flex px-4 py-2 font-medium mx-auto mt-6' onClick={handleButtonClick}>
                Details
                {isExpanded ? <DetailUp/> : <DetailDown/>}
            </button>
          </div>
          <div className='w-[142px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[65px]'>Total Amount</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>500,000 BDT</h1>
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-7 w-[76px]'>Minimum: BDT 5,00,000</h1>            
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-4 w-[93px]'>Minimum: BDT 5,00,00,000</h1>            
          </div>
          <div className='w-[134px] px-4 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A]'>Interest Rate</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>9 %</h1>
          </div>
          <div className='w-[144px] px-4 border-r-2'>
            <h1 className='etxt-base font-medium leading-4 text-[#1A1A1A] w-[65px]'>Loan Duration</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>5 Years</h1>
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-7 w-[63px]'>Minimum: 3 Years</h1>            
            <h1 className='text-xs leading-[14px] text-[#7B7B7B] mt-4 w-[66px]'>Minimum: 20 Years</h1>            
          </div>
          <div className='w-[156px] space-y-12'>
            <LinkButton/>
            <CompareButton/>
          </div>
      </div>
      {isExpanded && (
        <div className='bg-white'>
          <div className='h-5 border-b-2 border-[#E8E8E8]'></div>
          <div className='flex py-5 px-6'>
            <div className='w-1/2 border-r-2 pr-12'>
              <h1 className='font-medium text-[#1A1A1A] leading-4 mb-4'>Fees & Charges</h1>
              <p className='text-xs font-normal leading-5 text-[#7B7B7B]'>Processing Fee: 0.5% of the approved loan amount Early Settlement Fee: 2% of the loan outstanding. Prepayment Fee: 1% of the prepaid amount.
              Loan Re-scheduling Fee: 1% of the loan outstanding. Penal Charge: 3% on the arrears amount.
              </p>
            </div>
            <div className='w-1/2 pl-9 pr-12'>
              <h1 className='font-medium text-[#1A1A1A] leading-4 mb-4'>Eligibility</h1>
              <p className='text-xs font-normal leading-5 text-[#7B7B7B]'>
                Minimum Income: BDT 30,000Minimum 
                Experience: 1 Year
                Age Requirement: 21 Years to 65 Years
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanRow;