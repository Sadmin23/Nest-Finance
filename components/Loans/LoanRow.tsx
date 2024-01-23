'use client';

import Image from 'next/image';
import LinkButton from '../Buttons/LinkButton';
import CompareButton from '../Buttons/Comparebutton';
import { useEffect, useState } from 'react';
import DetailDown from '../Icons/DetailDown';
import DetailUp from '../Icons/DetailUp';

interface LoanRowProps {
  min : number;
  max : number;
  interest : null | string;
  grace_period : string;
  interest_type : string;
  duration : number;
  bank_id: string;
  name: string;
  type: string;
}

const LoanRow = ({ min, max, interest, grace_period, interest_type, duration, bank_id, name, type }: LoanRowProps): JSX.Element => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let apiUrl = `http://127.0.0.1:8000/bankapi/bank/${bank_id}/`;    

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image_url);
      });
  }, [bank_id]);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const rate = (interest!=null) ? `${interest} %` : 'N/A'
  const Duration = (duration==null) ? 'N/A': (duration < 12) ? `${duration} Months` : `${duration/12} Years`
  const Grace = (grace_period!=null) ? `${grace_period} Years` : 'N/A'
  const Max = (max!=null) ? `৳ ${max}` : 'N/A'
  const Min = (min!=null) ? `৳ ${min}` : 'N/A'

  return (
    <div className='w-[764px] rounded-md border-2 border-[#D4D4D4]'>
      <div className="bg-white rounded-md h-[200px] flex py-5">
          <div className='w-[192px] border-r-2 flex flex-col'>
            <Image
              src={imageUrl}
              width={160}
              height={70}
              alt="brac"
              className='mx-auto'
            />
            <h2 className='text-[#1A1A1A] text-[18px] font-semibold text-center mx-3 mt-auto mb-2'>{name}</h2>
          </div>
          <div className='w-[142px] pl-6 border-r-2'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A] w-[65px]'>Total Amount</h1>
            <div className="flex flex-col text-[#7B7B7B]">
              <h1 className="text-xs leading-[14px] mt-4">Minimum:</h1>
              <h1 className="text-xs leading-[14px] mt-1">{Min}</h1>
            </div>
            <div className="flex flex-col text-[#7B7B7B]">
              <h1 className="text-xs leading-[14px] mt-6">Maximum:</h1>
              <h1 className="text-xs leading-[14px] mt-1">{Max}</h1>
            </div>
          </div>
          <div className='w-[134px] px-4 border-r-2 space-y-4'>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A]'>Interest Type</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] '>{interest_type}</h1>
            <h1 className='text-base font-medium leading-4 text-[#1A1A1A]'>Interest Rate</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E]'>{rate}</h1>
          </div>
          <div className='w-[144px] px-4 border-r-2'>
            <h1 className='font-medium leading-4 text-[#1A1A1A] w-[65px]'>Loan Duration</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>{Duration}</h1>
            <h1 className='font-medium leading-4 text-[#1A1A1A] w-[65px] mt-4'>Grace Period</h1>
            <h1 className='text-xs font-medium leading-[14px] text-[#53389E] mt-4'>{Grace}</h1>  
          </div>
          <div className='w-[156px] space-y-12 my-auto'>
            <button className='rounded-md border-2 border-[#53389E] text-[#53389E] bg-white text-xs flex px-2 py-[6px] font-medium mx-auto' onClick={handleButtonClick}>
                Details
                {isExpanded ? <DetailUp/> : <DetailDown/>}
            </button>
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