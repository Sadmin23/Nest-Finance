'use client';
import Link from 'next/link';
import NavDropdown from './Icons/NavDropdown';
import 'typeface-poppins';
import NFLogoSmall from './SVG/NFLogoSmall';
import { useState } from 'react';

const Nav = ({ bgOption }: { bgOption: string }): JSX.Element => {

  let bg

  if (bgOption==='purple')

    bg = 'bg-[#7f56d9]'
  else
    bg = 'bg-[#53389E]'

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const underline = 
    <div className='absolute h-[2px] w-full bg-[#F0EBFF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>

  return (
    <div className={`flex items-end h-24 px-40 ${bg}`}>
      <div className='mr-auto my-auto'>
        <Link href="/" className='text-white'>
          <NFLogoSmall/>
        </Link>
      </div>
      <div className={`h-full text-[#F0EBFF] font-medium space-x-12 flex`}>
        <Link href="/" className='ml-4 my-auto relative inline-block group'>
          Home
          {underline}  
        </Link>
        <section className='relative flex space-x-2 items-center inline-block group' onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
          <Link href="/banks">Banks
          {underline}
          </Link>
          <NavDropdown/>
          {isOpen && (
              <div className="absolute -left-4 mt-[416px] rounded-xl w-72 h-80 shadow-2xl bg-white">
                <ul>
                  <li>
                    <a
                      href="/banks/public-bank"
                      className="block pl-6 pr-8 pt-5 pb-3  text-[#53389E] hover:bg-[#F0EBFF] hover:rounded-t-xl"
                    >
                      Public Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="/banks/private-bank"
                      className="block pl-6 pr-8 pb-5 pt-3  text-[#53389E] hover:bg-[#F0EBFF] hover:rounded-b-xl"
                    >
                      Private Bank
                    </a>
                  </li>
                </ul>
              </div>
          )}
        </section>
        <Link href="/branch-list" className='my-auto inline-block relative group'>
          Branch
          {underline}
        </Link>
        <Link href="/atm" className='my-auto items-center relative inline-block group'>
          ATMs
          {underline}
        </Link>
        <section className='flex space-x-2 my-auto items-center relative inline-block group'>
          <Link href="/loans">
            Loans
            {underline}
          </Link>
          <NavDropdown/>
        </section>
        <section className='flex space-x-2 my-auto items-center inline-block relative group'>
          <Link href="/loans">
            Account
            {underline}
          </Link>
          <NavDropdown/>
        </section>
        <section className='flex space-x-2 my-auto items-center relative inline-block group'>
          <Link href="/loans">
            Card
            {underline}
          </Link>
          <NavDropdown/>
        </section>
        <Link href="/atm" className='my-auto relative inline-block group'>
          Compare
          {underline}
        </Link>
      </div>

    </div>
  );
};

export default Nav;