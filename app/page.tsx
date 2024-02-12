'use client';
import Nav from '@/components/Nav';
import Hero from '@/components/Home/Hero';
import Options from '@/components/Home/Options';
import LearnMore from '@/components/Home/LearnMore';
import PopularBanks from '@/components/Home/PopularBanks';
import Testemonial from '@/components/Home/Testemonial';
import Subscription from '@/components/Home/Subscription';
import CarouselTestemonial from '@/components/Home/CarouselTestemonial';

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
