'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import 'typeface-poppins';

const Nav = ({ bgOption }: { bgOption: string }): JSX.Element => {

  let image, bg, text="text-";

  if (bgOption==='purple')
  {
    image="/brand_assets/Logo.png";
    bg = 'bg-[#7f56d9]'
    text += "white"


  }
  else{
    image="/brand_assets/Logo3.png";
    bg = "bg-white"
    text += "black" 
  }

  const router = useRouter();
  return (
    <div className={`flex py-16 ${bg}`}>
      <div className='pl-40 pr-16'>
        <Link href="/">
          <Image
            src={image}
            width={75}
            height={40}
            className='p-auto'
            alt="Picture of the author"
            />
        </Link>
      </div>
      <div className={`font-poppins font-normal text-base ${text} my-auto space-x-12 flex`}>
        <Link className='ml-4' href="/">Home</Link>
        <section className='flex space-x-2'>
          <Link href="/all-banks">Banks</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/card-details">Cards</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/atm">ATMs</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Compare</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Bonds</Link>
          <Dropdown/>
        </section>
      </div>
      <div className='ml-auto mr-40 space-x-6'>
      <button className='rounded-[8px] w-28 h-10 text-base font-medium text-white border-[1px] border-white'>Login</button>
        <button className='rounded-[8px] w-28 h-10 text-base font-medium text-violet-500 bg-white'>Register</button>
      </div>
    </div>
  );
};

export default Nav;