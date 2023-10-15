'use client';

interface BranchDataProps {
    index: number;
    Branch_Name: string;
    District: string;
    Division: string;
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
      District,
      Division,
      Address,
      Contact,
      Email,
      Swift_Code,
      Routing_No,
    } = props;


    

    let bg = "bg-[#F0EBFF]"

    if (index % 2 === 0)
        bg="bg-white"
    

  return (
        <tr className={`flex ${bg}`}>
            <td className="w-36 px-6 text-sm leading-[18px] border-x-2 border-[#D3D3D3] flex items-center">
                {Branch_Name}
            </td>
            <td className="w-28 text-center text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {District}
            </td>
            <td className="w-28 text-center text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Division}
            </td>
            <td className="w-56 px-4 py-2 text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Address}
            </td>
            <td className="w-52 px-3 text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Contact}
            </td>
            <td className="w-44 px-2 text-center text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Email}
            </td>
            <td className="w-28 text-center text-sm leading-[18px] border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                {Swift_Code}
            </td>
            <td className="w-32 text-center text-sm border-r-2 border-[#D3D3D3 leading-[18px] flex items-center justify-center">
                {Routing_No}
            </td>
        </tr>
  );
};

export default BranchComponent;