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
        <div className="card relative w-48 h-64 overflow-hidden bg-gray-200 transition-transform ease-in-out duration-300 transform hover:-translate-y-full">
    <div className="upper-part absolute inset-0 flex items-center justify-center z-20">
        0
    </div>
    <div className="lower-part absolute inset-0 flex items-center justify-center z-10 text-white">
        Lower Part
    </div>
</div>


    </div>
  );
};

export default Home;
