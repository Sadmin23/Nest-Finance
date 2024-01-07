'use client';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Options from '@/components/Options';
import LearnMore from '@/components/LearnMore';
import PopularBanks from '@/components/PopularBanks';
import Testemonial from '@/components/Testemonial';
import Subscription from '@/components/Subscription';

const Home = () => {

  return (
    <div className='flex-col'>
        <Nav bgOption='purple'/>
        <Hero/>
        <Options/>
        <LearnMore/>
        <PopularBanks/>
        <Testemonial/>
        <Subscription/>
    </div>
  );
};

export default Home;
