'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Footer = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex-col h-96" style={{backgroundColor: "#53389E"}}>
        <div className='flex border-b-2 mx-40 pt-14 pb-20 border-white'>
            <div className='flex-col'>
                <div className=''>
                  <Image
                    src="/brand_assets/Logo.png"
                    width={75}
                    height={40}
                    className='p-auto'
                    alt="Picture of the author"
                    />
                </div>
                <div className='flex space-x-14 font-inter font-normal text-base text-white mt-10 '>
                  <Link href="/">Home</Link>
                  <Link href="/">Banking</Link>
                  <Link href="/">Credit Cards</Link>
                  <Link href="/">Deposits</Link>
                  <Link href="/">Loans</Link>
                </div>
            </div>
            <div className='flex-col mr-0 ml-auto'>
                <h2 className='font-inter font-normal text-lg text-white'>Get the latest offers & deals</h2>
                <div className='flex space-x-2 mt-6'>
                    <input className='w-[300px] h-12 rounded-lg'></input>
                    <button className='rounded-lg w-36 h-12 text-base font-medium text-white' style={{backgroundColor: "#7F56D9"}}>Register</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
