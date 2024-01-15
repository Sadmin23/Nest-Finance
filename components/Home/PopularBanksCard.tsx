'use client';

import Image from 'next/image';

const PopularBanksCard = ({ x }: { x: number }): JSX.Element => {

  let content

  switch (x) {
    case 1:
      content =           
        <Image
          src="/brand_assets/city0.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-8'
        />
      break;
    case 2:
      content =           
        <Image
          src="/brand_assets/easternbl.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-[26px]'
        />
      break;
    case 3:
      content =           
        <Image
          src="/brand_assets/islami.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-[30px]'
        />
      break;
    case 4:
      content =           
        <Image
          src="/brand_assets/bankasia0.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-10'
        />
      break;
    case 5:
      content =           
        <Image
          src="/brand_assets/bracbank.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-[54px]'
        />
      break;
    case 6:
      content =           
        <Image
          src="/brand_assets/dbbl0.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-[44px]'
        />
      break;
    default:
      content =           
        <Image
          src="/brand_assets/city0.png"
          width={111}
          height={600}
          alt="bg"
          className='mt-8'
        />
  }

  return (
    <section className='w-[165px] h-[207px] rounded-2xl border-2 border-[#53389E] flex flex-col justify-center items-center'>
      {content}
      <h2 className='font-medium leading-normal text-[#53389E] mt-auto mb-7'>Bank details</h2>
    </section>
  );
};

export default PopularBanksCard;