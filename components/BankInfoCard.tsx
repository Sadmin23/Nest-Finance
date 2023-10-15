'use client';

import Image from 'next/image';
import ServiceButton from './ServiceButton';
import OptionButton from './OptionButton';

const BankInfoCard = ({ n }: { n: number }): JSX.Element => {

    let content

    switch (n) {
      case 1:
        content =           
          <Image
            src="/brand_assets/bracbank.png"
            width={248}
            height={70}
            alt="brac"
            className='mt-10 mb-2'
          />
        break;
      case 2:
        content = 
          <Image
          src="/brand_assets/dhakabank.png"
          width={239}
          height={46}
          alt="abbanklogo"
          className='mt-11 mb-6'
          />
        break;
    }

  return (
    <div className='w-[565px] rounded-2xl border-2 border-[#53389E] flex items-end'>
        <div className='flex-col mx-8'>
            {content}
            <h2 className='font-medium text-sm leading-5 text-[#53389E]'>Private • Commercial • Local</h2>
            <h2 className='text-sm leading-5 text-[#1D2939] mt-4'>
                With the vision of "Building profitable and socially responsible financial institution focused on Market and Business with 
                Growth potential, thereby assisting [BRAC](http://www.brac.net/ "BRAC")...        
            </h2>
            <section className='space-y-6 mb-8 mt-6'>
                <div className='flex space-x-3'>
                    <OptionButton text='Info'/>
                    <OptionButton text='Loans'/>
                    <OptionButton text='DPS'/>
                    <OptionButton text='Cards'/>
                    <OptionButton text='Services'/>
                </div>
                <div className='flex space-x-4'>
                    <ServiceButton text='Banking Details'/>
                    <ServiceButton text='Branches'/>
                    <ServiceButton text='ATM'/>
                    <ServiceButton text='Routing'/>
                </div>
            </section>
        </div>
    </div>
  );
};

export default BankInfoCard;