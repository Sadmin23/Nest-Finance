'use client';

import Image from 'next/image';

interface BranchDataProps {
    index: number;
    ATM_Name: string;
    District: string;
    Address: string;
    Bank_Name: string;
    Last_Entry: number;
  }
  
  const ATMComponent: React.FC<BranchDataProps> = (props) => {
    const {
      index,
      ATM_Name,
      District,
      Address,
      Bank_Name,
      Last_Entry
    } = props;


    let bg = "bg-[#F0EBFF]"

    if (index % 2 === 0)
        bg="bg-white"
    
    let condition = (Last_Entry === index + 1)

  return (
        <tr className={`flex ${bg} leading-[18px] ${condition ? 'rounded-b-xl border-b' : ''}`}>
            <td className={`w-64 px-4 py-6 text-sm border-x border-[#D3D3D3] flex items-center ${(condition)? 'rounded-bl-xl' : ''}`}>
                {ATM_Name}
            </td>
            <td className="w-44 px-4 text-sm border-r border-[#D3D3D3] flex items-center">
                {District}
            </td>
            <td className="w-72 px-4 py-2 text-sm border-r border-[#D3D3D3]  flex items-center">
                {Bank_Name}
            </td>
            <td className="w-96 px-3 text-sm border-r border-[#D3D3D3]  flex items-center">
                {Address}
            </td>
            <td className={`flex items-center ${(condition)? 'rounded-br-xl' : ''}`}>
                <Image
                    src="/brand_assets/map.png"
                    width={24}
                    height={24}
                    alt="ific"
                    className='mx-10'
                />
            </td>         
        </tr>
  );
};

export default ATMComponent;