'use client';
import LoanList from '@/components/LoanList';
import LoansHero from '@/components/LoansHero';
import Nav from '@/components/Nav';

const Loans = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <LoansHero/>
        <LoanList/>
    </div>
  );
};

export default Loans;