'use client';
import BankCardWrapper from '@/components/BankCardWrapper';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import Nav from '@/components/Nav';
import PageNavigation from '@/components/PageNavigation';

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero/>
        <BankSearch/>
        <BankCardWrapper/>
        <PageNavigation/>
    </div>
  );
};

export default Home;
