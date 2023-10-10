'use client';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero/>
        <BankSearch/>
    </div>
  );
};

export default Home;
