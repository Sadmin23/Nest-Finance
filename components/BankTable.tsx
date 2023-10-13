'use client';

import BranchComponent from "./BankTableRow";
import { BranchData } from "@/app/branch-list/data";

const BankTable = (): JSX.Element => {


  return (
    <table className='flex-col mx-40 border-b-2 border-[#D3D3D3'>
        <tr className="flex h-20 bg-[#53389E]">
            <td className="w-36 text-white text-center border-x-2 border-[#D3D3D3] flex items-center justify-center">
                Branch Name
            </td>
            <td className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                District
            </td>
            <td className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Division
            </td>
            <td className="w-56 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Address
            </td>
            <td className="w-52 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Contact
            </td>
            <td className="w-44 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Email
            </td>
            <td className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                Swift Code
            </td>
            <td className="w-32 text-white text-center border-r-2 border-[#D3D3D3] flex items-center justify-center">
                Routing No.
            </td>
        </tr>
        {BranchData.map((branch, index) => (
        <BranchComponent key={index} index={index} {...branch} />
      ))}
    </table>
  );
};

export default BankTable;