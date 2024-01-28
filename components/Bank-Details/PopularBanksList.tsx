import React from 'react';
import Image from "next/image";

const PopularBanksList = (): JSX.Element => {
    return(
        <div className="flex gap-6">
            <Image
                src="/brand_assets/bank_logo/ebl.png"
                width={68}
                height={80}
                alt="Popular Banks"
            />
            <div className='flex flex-col space-y-2'>
                <h1 className="text-lg font-semibold">Eastern Bank Limited</h1>
                <h1 className="text-sm font-normal text-[#696969]">City Bank Center, 136, Gulshan Avenue, Gulshan-2,</h1>
            </div>
        </div>
    )
};

export default PopularBanksList;
