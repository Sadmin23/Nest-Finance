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

  return (
    <div className={`flex items-end h-20 px-40 ${bg}`}>
      <div className='mr-16 my-auto'>
        <Link href="/" className='text-white'>
          <NFLogoSmall/>
        </Link>
      </div>
      <div className={`h-full text-white text-sm tracking-widest font-semibold space-x-16 flex`}>
        <Link href="/" className='ml-4 my-auto'>Home</Link>
        <section className='relative flex space-x-2 items-center' onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
          <Link href="/banks">Banks</Link>
          <button>
            <NavDropdown/>
          </button>
          {isOpen && (
              <div className="absolute -left-4 mt-[400px] rounded-xl w-[600px] h-80 shadow-2xl bg-white">
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
        <Link href="/branch-list" className='my-auto'>Branch</Link>
        <Link href="/atm" className='my-auto'>ATMs</Link>
        <section className='flex space-x-2 my-auto'>
          <Link href="/loans">Loans</Link>
          <NavDropdown/>
        </section>
        <section className='flex space-x-2 my-auto'>
          <Link href="/loans">Account</Link>
          <NavDropdown/>
        </section>
        <section className='flex space-x-2 my-auto'>
          <Link href="/loans">Card</Link>
          <NavDropdown/>
        </section>
        <Link href="/atm" className='my-auto'>Compare</Link>
      </div>

    </div>
  );
};

export default Nav;