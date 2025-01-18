'use client';

import Image from 'next/image';
import ServiceButton from '../Buttons/ServiceButton';
import OptionButton from '../Buttons/OptionButton';
import Link from 'next/link';
import { findIdByName } from '@/app/data';

interface BankInfoCardProps {
  name: string
  url: string
  type: string
  category: string
  origin: string
}

const BankInfoCard = ({name, url, type, category, origin}:BankInfoCardProps): JSX.Element => {

  let textContent = "City Bank is one of the oldest private Commercial Banks operating in Bangladesh. It is a top bank among the oldest five Commercial Banks in the country"

  let slug = name.replace(/ /g, '-');
  type = type.replace(" Bank", "");
  category = category.replace(" Bank", "");
  origin = origin.replace(" Bank", "");
  let id = findIdByName(name);

  return (
    <div className="px-6 w-full xm:w-1/2 my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden p-8 md:p-4 shadow-lg rounded-2xl border-2 bg-white border-[#53389E]">
            <Image
              src={url}
              width={280}
              height={100}
              alt="logo"
              className='mx-auto my-2'
            />

            <header className="items-center justify-between leading-tight">
                <h2 className='font-semibold text-sm leading-5 text-[#53389E] text-center'>{type} • {category} • {origin}</h2>
                <h2 className='text-sm leading-5 text-justify text-[#1D2939] mt-3'>
                  {textContent}
                </h2>
            </header>
            <footer className="items-center space-y-4 mt-4 justify-between leading-none">
              <div className='flex space-x-4'>
                      <OptionButton text='Deposits'/>
                      <Link href={`/loans/${slug}`}>
                        <OptionButton text='Loans'/>
                      </Link>
                      <OptionButton text='Cards'/>
              </div>
              <div className='flex space-x-4'>
                  <Link href={`/bank-details/${id}`}>
                    <ServiceButton text='Bank Details'/>
                  </Link>  
                  <Link href={`/branch-list/${slug}`}>
                    <ServiceButton text='Branches'/>
                  </Link>
                  <Link href={`/atm/${slug}`}>
                    <ServiceButton text='ATM'/>
                  </Link>
              </div>
            </footer>
        </article>
    </div>
  );
};

export default BankInfoCard;