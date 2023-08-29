'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Bankrow from '../../components/Bankrow'
import Nav from '@/components/Nav';

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className='bg-[#F2F4F7] flex-col'>
      <Nav bgOption='white'/>
      <div className='h-[1800px] flex-col'>
        <div className='flex'>
          <div className='flex-col'>
            <div className="pl-40 pt-32 font-inter mx-auto font-medium text-6xl absolute w-[900px] leading-tight">
              <h1>All your banking information in one place</h1>
            </div>
            <div className="pl-40 pt-80 w-[870px] font-inter font-medium text-base absolute">
              Managing your finances has never been easier with the convenience of centralized banking information.
               Imagine having all your financial accounts - from various banks to credit cards and loans - neatly organized and easily accessible in a single location.              
            </div>
          </div>
          <div className='mr-0 ml-auto'>
              <Image
                src="/brand_assets/bg.png"
                width={800}
                height={600}
                alt="bg"
                />
          </div>
        </div>

      </div>
    </div>
  );
}