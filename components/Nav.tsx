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
    <div className={`flex py-10 ${bg}`}>
      <div className='pl-40 pr-56'>
        <Link href="/">
          <NFLogoSmall/>
        </Link>
      </div>
      <div className={`font-poppins font-normal text-base text-white my-auto space-x-12 flex`}>
        <Link className='ml-4' href="/">Home</Link>
        <section className='relative flex space-x-2'>
          <Link href="/banks">Banks</Link>
          <button onClick={toggleDropdown}>
            <NavDropdown/>
          </button>
          {isOpen && (
                    <div className="absolute -left-4 mt-8 rounded-xl w-60 shadow-2xl bg-white">
                        <ul>
                            <li>
                                <a
                                    href="/banks/public-bank"
                                    className="block pl-6 pr-8 pt-5 pb-3  text-[#53389E] hover:bg-[#F0EBFF] hover:rounded-t-xl"
                                    onClick={closeDropdown}
                                >
                                    Public Bank
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/banks/private-bank"
                                    className="block pl-6 pr-8 pb-5 pt-3  text-[#53389E] hover:bg-[#F0EBFF] hover:rounded-b-xl"
                                    onClick={closeDropdown}
                                >
                                    Private Bank
                                </a>
                            </li>
                        </ul>
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
          <NavDropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Account</Link>
          <NavDropdown/>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Compare</Link>
        </section>
        <section className='flex space-x-2'>
          <Link href="/">Card</Link>
          <NavDropdown/>
        </section>
      </div>
    </div>
  );
};

export default Nav;