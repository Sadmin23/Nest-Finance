'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import 'typeface-poppins';
import NFLogoSmall from './SVG/NFLogoSmall';
import { useState } from 'react';

const Nav = ({ bgOption }: { bgOption: string }): JSX.Element => {

  let bg

  if (bgOption==='purple')

    bg = 'bg-[#7f56d9]'
  else
    bg = 'bg-[#53389E]'

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className={`flex py-10 ${bg}`}>
      <div className='pl-40 pr-56'>
        <Link href="/">
          <NFLogoSmall/>
        </Link>
      </div>
      <div className={`font-poppins font-normal text-base text-white my-auto space-x-12 flex`}>
        <Link className='ml-4' href="/">Home</Link>
        <section className='flex space-x-2'>
          <Link href="/banks">Banks</Link>
          <button onClick={toggleDropdown}>
            <Dropdown/>
          </button>
          {isDropdownOpen && (
            <div className="">
              <Link href="/option1">Option 1</Link>
              <Link href="/option2">Option 2</Link>
            </div>
          )} 
        </section>
        <section className='flex space-x-2'>
          <Link href="/branch-list">Branch</Link>
        </section>
        <section className='flex space-x-2'>
          <Link href="/atm">ATMs</Link>
        </section>
        <section className='flex space-x-2'>
          <Link href="/loans">Loans</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Account</Link>
          <Dropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Compare</Link>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Card</Link>
          <Dropdown/>
        </section>
      </div>
    </div>
  );
};

export default Nav;