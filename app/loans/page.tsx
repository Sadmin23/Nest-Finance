'use client';
import BankInfoWrapper from '@/components/BankInfoWrapper';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import Nav from '@/components/Nav';

const Loans = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero n={1}/>
        <BankSearch/>
        <BankInfoWrapper/>
    </div>
  );
};

export default Loans;