'use client';
import BankInfoWrapper from '@/components/BankInfoWrapper';
import BankListHero from '@/components/BankListHero';
import BankSearch from '@/components/BankSearch';
import LoanList from '@/components/LoanList';
import Nav from '@/components/Nav';

const Loans = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BankListHero n={2}/>
        <BankSearch/>
        <LoanList/>
    </div>
  );
};

export default Loans;