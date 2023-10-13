'use client';

import BranchListHero from "@/components/BranchListHero";
import Nav from "@/components/Nav";

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='white'/>
        <BranchListHero/>
    </div>
  );
};

export default Home;
