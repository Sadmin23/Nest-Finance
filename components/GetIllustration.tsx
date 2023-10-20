import React from 'react';

import Image from 'next/image';

const GetIllustration = ({ x }: { x: number }) => {

    let image

    switch (x) {
        case 1:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={465}
                height={40}
                alt="r"
                className=''
            />
            break;
        case 2:
            image =
            <Image
                src="/brand_assets/cardIllustration.png"
                width={420}
                height={40}
                alt="r"
                className=''
            />
            break;
        case 3:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={465}
                height={40}
                alt="r"
                className=''
            />
            break;
        case 4:
            image =
            <Image
                src="/brand_assets/loanIllustration.png"
                width={510}
                height={40}
                alt="r"
                className='mt-[70px]'
            />
            break;
        case 5:
            image =
            <Image
                src="/brand_assets/mutualfundsIllustration.png"
                width={504}
                height={40}
                alt="r"
                className='mt-14'
            />
            break;
        case 6:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={465}
                height={40}
                alt="r"
                className=''
            />
            break;
        default:
            image =
            <Image
                src="/brand_assets/bankIllustration.png"
                width={500}
                height={40}
                alt="r"
                className=''
            />
            break;
    }
    

  return (
    <div className='mt-24'>
        {image}
    </div>
  )
};

export default GetIllustration;