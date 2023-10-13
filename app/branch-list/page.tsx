'use client';

import BankTable from "@/components/BankTable";
import BranchListHero from "@/components/BranchListHero";
import Nav from "@/components/Nav";
import PageNavigation from "@/components/PageNavigation";

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BranchListHero/>
        <BankTable/>
        <PageNavigation/>
    </div>
  );
};

export default Home;
