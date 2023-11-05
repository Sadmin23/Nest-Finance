'use client';
import BankInfoWrapper from '@/components/BankInfoWrapper';
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
        <BankInfoWrapper/>
    </div>
  );
};

export default Home;
