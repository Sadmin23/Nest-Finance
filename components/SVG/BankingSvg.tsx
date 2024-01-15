'use client';

import Image from 'next/image';

const BankingSvg = ({ a, b }: { a: number, b: number }): JSX.Element => {

  let image = "/brand_assets/options/"

  switch (a) {
    case 1:
      image += "banking"
      break;
    case 2:
      image += "cards"
      break;
    case 3:
      image += "atm"
      break;
    case 4:
      image += "loans"
      break;
    case 5:
      image += "account"
      break;
    case 6:
      image += "branch"
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
      width={24}
      height={24}
      alt="blob"
      className='mx-auto'
    />
  );
};

export default BankingSvg;