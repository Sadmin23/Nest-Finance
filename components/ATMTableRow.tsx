'use client';

import Image from 'next/image';

interface BranchDataProps {
    index: number;
    Branch_Name: string;
    District: string;
    Division: string;
    Address: string;
    Contact: string;
    Routing_No: string;
  }
  
  const ATMComponent: React.FC<BranchDataProps> = (props) => {
    const {
      index,
      Branch_Name,
      District,
      Division,
      Address,
      Contact,
      Routing_No,
    } = props;


    let bg = "bg-[#F0EBFF]"

    if (index % 2 === 0)
        bg="bg-white"
    

  return (
        <tr className={`flex ${bg} leading-[18px]`}>
            <td className="w-36 px-3 py-6 text-sm border-x-2 border-[#D3D3D3] flex items-center">
                {Branch_Name}
            </td>
            <td className="w-28 text-sm border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {District}
            </td>
            <td className="w-28 text-sm border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Division}
            </td>
            <td className="w-72 px-4 py-2 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                {Address}
            </td>
            <td className="w-80 px-3 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                {Contact}
            </td>
            <td className="w-32 px-4 text-sm border-r-2 border-[#D3D3D3  flex items-center">
                {Routing_No}
            </td>
            <td className='flex items-center'>
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