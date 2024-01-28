import React from 'react';
import EasternBank from '../Logo/EasternBank';
import CityBank from '../Logo/CityBank';

const PopularBanksList = ({type} : {type : number}): JSX.Element => {

    let BankImage, Text, Name

    switch (type) {
        case 1:
            BankImage = <EasternBank/>
            Name = "Eastern Bank Limited"
            Text="EBL Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            break;
        case 2:
            BankImage = <CityBank/>
            Name = "City Bank Limited"
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            break

        default:
            break;
    }

    return(
        <div className="flex gap-5 w-80 mx-auto border border-[#E7E7E7] rounded-md items-center pl-4 py-3">
            {BankImage}
            <div className='flex flex-col w-56'>
                <h1 className="text-lg font-semibold text-[#1A1A1A]">{Name}</h1>
                <h1 className="text-[10px] font-normal text-[#696969]">{Text}</h1>
            </div>
        </div>
    )
};

export default PopularBanksList;
