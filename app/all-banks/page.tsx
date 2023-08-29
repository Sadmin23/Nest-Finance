'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Bankrow from '../../components/Bankrow'
import Nav from '@/components/Nav';

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className='bg-[#F2F4F7] '>
            <Nav bgOption='white'/>
    </div>
  );
}