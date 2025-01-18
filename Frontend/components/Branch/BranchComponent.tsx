'use client';

interface BranchDataProps {
    Total_Index: number;
    index: number;
    Branch_Name: string;
    Bank_Name: string;
    District: string;
    Address: string;
    Contact: string;
    Email: string;
    Swift_Code: string;
    Routing_No: string;
    Last_Entry: number;
  }
  
  const BranchComponent: React.FC<BranchDataProps> = (props) => {
    const {
      Total_Index,
      index,
      Branch_Name,
      Bank_Name,
      District,
      Address,
      Email,
      Swift_Code,
      Routing_No,
      Last_Entry,
    } = props;

    let bg = "bg-[#F0EBFF]"

    if (index % 2 === 1)
        bg="bg-white"
    

    let condition = (Last_Entry === Total_Index)

  return (
        <main className={`flex ${bg} leading-[18px] ${condition ? 'rounded-b-xl border-b' : ''}`}>
            <div className={`w-40 px-3 py-6 text-sm border-x border-[#D3D3D3] flex items-center ${(condition)? 'rounded-bl-xl' : ''}`}>
                {Branch_Name}
            </div>
            <div className="w-56 text-sm border-r border-[#D3D3D3] flex items-center px-4">
                {Bank_Name}
            </div>
            <div className="w-32 px-4 py-2 text-sm border-r border-[#D3D3D3] flex items-center">
                {District}
            </div>
            <div className="w-72 px-3 text-sm border-r border-[#D3D3D3] flex items-center">
                {Address}
            </div>
            <div className="w-40 px-2 py-2 text-sm border-r border-[#D3D3D3] flex items-center">
                <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {Email}
                </div>
            </div>
            <div className="w-32 pl-3 text-sm border-r border-[#D3D3D3] flex items-center">
                {Swift_Code}
            </div>
            <div className={`w-32 pl-4 text-sm border-r border-[#D3D3D3 flex items-center ${(condition)? 'rounded-br-xl' : ''}`}>
                {Routing_No}
            </div>
        </main>
  );
};

export default BranchComponent;