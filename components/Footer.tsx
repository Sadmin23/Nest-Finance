'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex-col h-[350px]" style={{backgroundColor: "#53389E"}}>
        <div className='flex border-b-2 mx-40 pt-16 pb-20 border-white'>
            <div className='flex-col'>
                <div className=''>
                  <Link href="/">
                    <Image
                      src="/brand_assets/Logo.png"
                      width={75}
                      height={40}
                      className='p-auto'
                      alt="Picture of the author"
                      />
                  </Link>
                </div>
                <div className='flex space-x-14 font-inter font-normal text-base text-white mt-10 '>
                  <Link href="/">Home</Link>
                  <Link href="/all-banks">Banking</Link>
                  <Link href="/card-details">Credit Cards</Link>
                  <Link href="/atm">ATMs</Link>
                </div>
            </div>
            <div className='flex-col mr-0 ml-auto'>
                <h2 className='font-inter font-normal text-lg text-white'>Get the latest offers & deals</h2>
                <div className='flex space-x-2 mt-6'>
                <input
                  className="w-[300px] h-12 rounded-lg font-inter font-medium text-base leading-[28px] flex items-center pl-[14.243px] placeholder-[#667085]"
                  placeholder="example@gmail.com"
                />
                    <button className='rounded-lg w-36 h-12 text-base font-medium text-white' style={{backgroundColor: "#7F56D9"}}>Register</button>
                </div>
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
