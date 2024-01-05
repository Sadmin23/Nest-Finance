'use client';

interface BranchDataProps {
    index: number;
    Branch_Name: string;
    Bank_Name: string;
    District: string;
    Address: string;
    Contact: string;
    Email: string;
    Swift_Code: string;
    Routing_No: string;
  }
  
  const BranchComponent: React.FC<BranchDataProps> = (props) => {
    const {
      index,
      Branch_Name,
      Bank_Name,
      District,
      Address,
      Email,
      Swift_Code,
      Routing_No,
    } = props;


    

    let bg = "bg-[#F0EBFF]"

    if (index % 2 === 0)
        bg="bg-white"
    

  return (
        <tr className={`flex ${bg} leading-[18px]`}>
            <td className="w-36 pl-3 py-6 text-sm border-x-2 border-[#D3D3D3] flex items-center">
                {Branch_Name}
            </td>
            <td className="w-28 text-sm border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Bank_Name}
            </td>
            <td className="w-56 px-4 py-2 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                {District}
            </td>
            <td className="w-44 px-3 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                {Address}
            </td>
            <td className="w-48 px-2 py-2 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {Email}
                </div>
            </td>
            <td className="w-32 pl-3 text-sm border-r-2 border-[#D3D3D3]  flex items-center">
                {Swift_Code}
            </td>
            <td className="w-32 pl-4 text-smborder-r-2 border-[#D3D3D3  flex items-center">
                {Routing_No}
            </td>
        </tr>
  );
};

export default BranchComponent;