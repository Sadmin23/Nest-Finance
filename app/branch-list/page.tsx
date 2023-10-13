'use client';

import BankTable from "@/components/BankTable";
import BranchListHero from "@/components/BranchListHero";
import Nav from "@/components/Nav";

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BranchListHero/>
        <BankTable/>
    </div>
  );
};

export default Home;
