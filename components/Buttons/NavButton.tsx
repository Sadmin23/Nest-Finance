import Image from 'next/image';
import React from 'react';

const NavButton = ({ type, text }: { type : number, text: string }) => {

    let image = "/brand_assets/buttons/", icon

    switch (type) {
      case 1:
        image += "loan"
        break;
      case 2:
        image += "branch"
        break;
      case 3:
        image += "atm"
        break;
      }

    image += ".png"

    icon = 
    <Image
      src={image}
      width={48}
      height={48}
      alt="blob"
      className='mx-auto'
    />

    return (
      <button className='bg-[#F0EBFF] w-60 h-32 mx-auto rounded-md space-y-2'>
        {icon}
        <h2 className='font-medium text-[#53389E]'>
        {text}
        </h2>
      </button>
    );
};

export default NavButton;