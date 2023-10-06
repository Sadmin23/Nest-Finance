'use client';
import Nav from '@/components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Options from '@/components/Options';

const Home = () => {
  const router = useRouter();

  return (
    <div className='flex-col'>
        <Nav bgOption='purple'/>
        <Hero/>
        <Options/>
    </div>
  );
};

export default Home;
