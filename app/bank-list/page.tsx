'use client';
import BankCardWrapper from '@/components/BankCardWrapper';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import Nav from '@/components/Nav';

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero/>
        <BankSearch/>
        <BankCardWrapper/>
    </div>
  );
};

export default Home;
