'use client';
import { useRouter } from 'next/navigation';
import TickCross from '@/components/TickCross'
import Image from 'next/image'
import { Button } from 'antd';

const TableRow = ({ text, t1, t2, t3 }: { text: string; t1: number; t2: number; t3: number }): JSX.Element => {
  const router = useRouter();      

  return (
    <div className="grid grid-cols-[13fr,29fr,29fr,29fr]">
        <div className="col-span-1 border-t-2 px-10 py-4 font-inter font-medium text-[18px]">
            {text}
        </div>
        <TickCross gr={t1}/>        
        <TickCross gr={t2}/>        
        <TickCross gr={t3}/>        
  </div>
  );
};

export default TableRow;
