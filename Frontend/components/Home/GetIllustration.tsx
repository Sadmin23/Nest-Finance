import React from 'react';

import Image from 'next/image';

const GetIllustration = ({ x }: { x: number }) => {

    let image

    switch (x) {
        case 1:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={450}
                height={40}
                alt="r"
                className=''
            />
            break;
        case 2:
            image =
            <Image
                src="/brand_assets/cardIllustration.png"
                width={450}
                height={40}
                alt="r"
                className=''
            />
            break;
        case 3:
            image =
            <Image
                src="/brand_assets/depositIllustration.png"
                width={450}
                height={40}
                alt="r"
                className='mt-10'
            />
            break;
        case 4:
            image =
            <Image
                src="/brand_assets/loanIllustration.png"
                width={480}
                height={40}
                alt="r"
                className='mt-10'
            />
            break;
        case 5:
            image =
            <Image
                src="/brand_assets/mutualfundsIllustration.png"
                width={450}
                height={40}
                alt="r"
                className='mt-10'
            />
            break;
        case 6:
            image =
            <Image
                src="/brand_assets/bondsIllustration.png"
                width={450}
                height={40}
                alt="r"
                className=''
            />
            break;
        default:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={450}
                height={40}
                alt="r"
                className=''
            />
            break;
    }
    

  return (
    <div className='ml-[52px]'>
        {image}
    </div>
  )
};

export default GetIllustration;