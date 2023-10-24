'use client';

import Image from 'next/image';

const BankingSvg = ({ a, b }: { a: number, b: number }): JSX.Element => {

  let image = "/brand_assets/"

  switch (a) {
    case 1:
      image += "banking"
      break;
    case 2:
      image += "card"
      break;
    case 3:
      image += "deposit"
      break;
    case 4:
      image += "loans"
      break;
    case 5:
      image += "funds"
      break;
    case 6:
      image += "bonds"
      break; 
    default:
      image += "banking"
    }




  if (b===0)
    image+="2"

  
   image += ".png" 

  return (
    <Image
      src={image}
      width={48}
      height={48}
      alt="blob"
      className='py-2 pr-2'
    />
  );
};

export default BankingSvg;