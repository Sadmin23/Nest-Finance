'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import NFLogoLarge from './SVG/NFLogoLarge';

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex-col bg-gradient-to-b from-[#53389e] to-[#684CB4]" >
        <div className='flex border-b-2 mx-40 pt-16 pb-20 border-white'>
            <div className='flex-col'>
                <Link href="/">
                  <NFLogoLarge/>
                </Link>
                <h2 className='text-white mt-10 w-96'>This PRD outlines the features and functionality of a comprehensive banking and financial information platform.</h2>
            </div>
            <div className='flex flex-col text-white space-y-6 ml-28'>
              <Link href="/">Home</Link>
              <Link href="/all-banks">Banking</Link>
              <Link href="/card-details">Credit Cards</Link>
              <Link href="/atm">ATMs</Link>
            </div>
            <div className='flex flex-col text-white space-y-6 ml-28'>
              <Link href="/">Deposits</Link>
              <Link href="/all-banks">Loans</Link>
              <Link href="/card-details">Bonds</Link>
              <Link href="/atm">Deposit Scheme</Link>
            </div>
        </div>
        <div className='flex mx-40 py-10 font-inter font-normal text-base text-[#D6BBFB]'>
            <h2>@2023. All rights reserved.</h2>
            <div className='ml-auto mr-0 space-x-6'>
                <Link href="/">Terms & Services</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
        </div>
    </div>
  );
};

export default Footer;