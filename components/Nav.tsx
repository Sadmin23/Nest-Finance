'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Nav = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex py-10" style={{backgroundColor: "#53389E"}}>
      <div className='pl-40 pr-16'>
        <Image
          src="/brand_assets/Logo.png"
          width={75}
          height={40}
          className='p-auto'
          alt="Picture of the author"
          />
      </div>
      <div className='font-inter font-normal text-base text-white space-x-12'>
        <Link href="/">Home</Link>
        <Link href="/">Banking</Link>
        <Link href="/">Credit Cards</Link>
        <Link href="/">Deposits</Link>
        <Link href="/">Loans</Link>
        <Link href="/">Mutual Funds</Link>
        <Link href="/">Bonds</Link>
      </div>
      <div className='ml-auto mr-40 space-x-8'>
        <Link href="/" className='font-inter font-normal text-base text-white'>Home</Link>
        <button className='rounded-[8px] w-28 h-10 text-base font-medium text-white' style={{backgroundColor: "#7F56D9"}}>Register</button>
      </div>
    </div>
  );
};

export default Nav;
