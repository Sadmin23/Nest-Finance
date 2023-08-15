'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Nav = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex pt-10" style={{backgroundColor: "#53389E"}}>
      <div className='pl-24 pr-16'>
        <Image
          src="/brand_assets/Logo.png"
          width={75}
          height={40}
          className='p-auto'
          alt="Picture of the author"
          />
      </div>
      <div className='font-inter font-normal text-base text-white space-x-16'>
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/">Team</Link>
        <Link href="/">Testemonial</Link>
      </div>
      <div className='ml-auto mr-20 space-x-8'>
        <Link href="/" className='font-inter font-normal text-base text-white'>Home</Link>
        <button className='rounded-[8px] w-28 h-10 text-base font-medium' style={{color: "#FFF", backgroundColor: "#7F56D9"}}>Register</button>
      </div>
    </div>
  );
};

export default Nav;
