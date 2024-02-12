import React from 'react';
import EasternBank from '../Logo/EasternBank';
import CityBank from '../Logo/CityBank';
import IFICBank from '../Logo/IFICBank';
import IslamiBank from '../Logo/IslamiBank';
import JamunaBank from '../Logo/JamunaBank';
import BankAsia from '../Logo/Bankasia';
import ABBank from '../Logo/ABBank';
import SonaliBank from '../Logo/SonaliBank';
import Link from 'next/link';

const PopularBanksList = ({type} : {type : number}): JSX.Element => {

    let BankImage, Text, Name, link = '/bank-details/';

    switch (type) {
        case 1:
            BankImage = <EasternBank/>
            Name = "Eastern Bank Ltd."
            Text="EBL Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '1b84c43a-7a86-4bb1-8d9a-0c7ebb27da07'
            break;
        case 2:
            BankImage = <CityBank/>
            Name = "City Bank"
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += 'f845dc7e-f5bf-4589-9d5e-7077ca7f3fc5'
            break
        case 3:
            BankImage = <IFICBank/>
            Name = "IFIC Bank Ltd."
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '96cddf84-a906-4616-9f27-f77543150a54'
            break
        case 4:
            BankImage = <IslamiBank/>
            Name = "Islami Bank Ltd."
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '19d0955c-8cd8-4edd-b160-ed1e5fbdaaa5'
            break
        case 5:
            BankImage = <JamunaBank/>
            Name = "Jamuna Bank Ltd."
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '8d3b00b3-4462-42d9-bdb9-a41966228860'
            break
        case 6:
            BankImage = <BankAsia/>
            Name = "Bank Asia"
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '1a7d5ab1-9127-4442-992d-4cb921faa3d9'
            break
        case 7:
            BankImage = <ABBank/>
            Name = "City Bank"
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += '86d03fe0-9560-4fd0-a9da-94a08f5c79aa'
            break
        case 8:
            BankImage = <SonaliBank/>
            Name = "Sonali Bank Ltd."
            Text="City Bank is one of the oldest private Commercial Banks operating in Bangladesh."
            link += 'e8e3ad16-a1a4-463e-b9cd-37faae32618d'
            break

        default:
            break;
    }

    return(
        <Link href={link}>
            <div className="flex gap-5 w-[350px] mb-6 mx-auto border border-[#E7E7E7] rounded-md items-center pl-4 py-3">
                {BankImage}
                <div className='flex flex-col w-56'>
                    <h1 className="text-lg font-semibold text-[#1A1A1A]">{Name}</h1>
                    <h1 className="text-[10px] font-normal text-[#696969]">{Text}</h1>
                </div>
            </div>
        </Link>
    )
};

export default PopularBanksList;
