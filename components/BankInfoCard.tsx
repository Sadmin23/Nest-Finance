'use client';

import Image from 'next/image';
import ServiceButton from './Buttons/ServiceButton';
import OptionButton from './Buttons/OptionButton';
import Link from 'next/link';

interface BankInfoCardProps {
  name: string
  url: string
  type: string
  category: string
  origin: string
}

const BankInfoCard = ({name, url, type, category, origin}:BankInfoCardProps): JSX.Element => {

  let textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country.."

  let slug = name.replace(/ /g, '-');
  type = type.replace(" Bank", "");
  category = category.replace(" Bank", "");
  origin = origin.replace(" Bank", "");

  return (
    <div className='w-[376px] h-[360px] px-6 rounded-2xl border-2 bg-white border-[#53389E] flex items-end'>
        <div className='flex-col mx-auto'>
          <div className='flex'>
            <Image
            src={url}
            width={280}
            height={100}
            alt="logo"
            className='mx-auto mb-2'
          />
          </div>
            <h2 className='font-semibold text-sm leading-5 text-[#53389E]'>{type} • {category} • {origin}</h2>
            <h2 className='text-sm leading-[18px] text-[#1D2939] mt-3'>
              {textContent}
            </h2>
            <section className='space-y-4 mb-6 mt-4'>
                <div className='flex space-x-4'>
                    <OptionButton text='Deposits'/>
                    <OptionButton text='Loans'/>
                    <OptionButton text='Cards'/>
                </div>
                <div className='flex space-x-4'>
                    <ServiceButton text='Bank Details'/>
                    <Link href={`/branch-list/${slug}`}>
                      <ServiceButton text='Branches'/>
                    </Link>
                    <Link href={`/atm/${slug}`}>
                      <ServiceButton text='ATM'/>
                    </Link>
                </div>
            </section>
        </div>
    </div>
  );
};

export default BankInfoCard;