'use client';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Options from '@/components/Options';
import LearnMore from '@/components/LearnMore';
import PopularBanks from '@/components/PopularBanks';
import Testemonial from '@/components/Testemonial';
import Subscription from '@/components/Subscription';

const Home = () => {
  const router = useRouter();

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
