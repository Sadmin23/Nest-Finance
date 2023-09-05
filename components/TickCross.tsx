'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const TickCross = ({ gr }: { gr: number }): JSX.Element => {
      
    let im = gr==0 ? "g" : "r"

  return (
    <div className="col-span-1 border-l-2 border-t-2 flex-col">
        <Image
          src={"/brand_assets/"+im+".png"}
          width={33}
          height={600}
          alt="bg"
          className='mx-auto my-4'
        />
    </div>
  );
};

export default TickCross;
