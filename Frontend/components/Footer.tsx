'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import NFLogoLarge from './SVG/NFLogoLarge';
import FooterIllustration from './Illustration/FooterIllustration';

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex-col bg-gradient-to-b from-[#53389e] to-[#684CB4]" >
        <div className='flex border-b-2 mx-40 pt-11 border-white'>
            <div className='flex-col'>
                <Link href="/">
                  <NFLogoLarge/>
                </Link>
                <h2 className='text-white mt-10 w-96 leading-7'>This PRD outlines the features and functionality of a comprehensive banking and financial information platform.</h2>
            </div>
            <div className='flex flex-col text-white space-y-6 ml-28 mt-11'>
              <Link href="/">Home</Link>
              <Link href="/banks">Banking</Link>
              <Link href="/">Credit Cards</Link>
              <Link href="/atm">Mutual Funds</Link>
            </div>
            <div className='flex flex-col text-white space-y-6 ml-28 mt-11 mb-10'>
              <Link href="/">Deposits</Link>
              <Link href="/loans">Loans</Link>
              <Link href="/">Bonds</Link>
              <Link href="/atm">Deposit Scheme</Link>
            </div>
            <FooterIllustration/>
        </div>
        <div className='flex mx-40 mt-6 pb-20 font-inter font-normal text-base text-[#D6BBFB]'>
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