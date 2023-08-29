'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';

const Nav = ({ bgOption }: { bgOption: string }): JSX.Element => {

  let image, bg, text="text-";

  if (bgOption==='purple')
  {
    image="/brand_assets/Logo.png";
    bg = "#53389E"
    text += "white"


  }
  else{
    image="/brand_assets/Logo2.png";
    bg = "#FFFFFF"
    text += "black" 
  }

  const router = useRouter();
  return (
    <div className="flex py-6" style={{backgroundColor: bg}}>
      <div className='pl-40 pr-16'>
        <Image
          src={image}
          width={75}
          height={40}
          className='p-auto'
          alt="Picture of the author"
          />
      </div>
      <div className={`font-inter font-normal text-base ${text} space-x-12 my-auto`}>
        <Link href="/">Home</Link>
        <Link href="/">Banking</Link>
        <Link href="/">Credit Cards</Link>
        <Link href="/">Deposits</Link>
        <Link href="/">Loans</Link>
        <Link href="/">Mutual Funds</Link>
        <Link href="/">Bonds</Link>
      </div>
      <div className='ml-auto mr-40 space-x-8'>
        <Link href="/" className={'font-inter font-normal text-base ${text}'}>Home</Link>
        <button className='rounded-[8px] w-28 h-10 text-base font-medium text-white' style={{backgroundColor: "#7F56D9"}}>Register</button>
      </div>
    </div>
  );
};

export default Nav;
