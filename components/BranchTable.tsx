'use client';

import Options from './Icons/Options';
import Up from './Icons/Up';
import Down from './Icons/Down';
import { useEffect, useRef, useState } from 'react';
import BranchComponent from './BranchComponent';
import PageNavigation from './PageNavigation';

const BranchTable = (): JSX.Element => {

    const [lf, setLF] = useState([0,0]);
    const [rowsnum, setRowsnum] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<any[]>([]);  
    const [error, setError] = useState(true)
    const [apiData, setApiData] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1);

    type PageRange = {
        firstEntry: number;
        lastEntry: number;
      };
      
      const calculatePageRange = (
        totalEntries: number,
        pageSize: number,
        pageNumber: number
      ): PageRange => {
        if (totalEntries === 0) {
          return { firstEntry: 0, lastEntry: 0 };
        } else {
          const firstEntry = (pageNumber - 1) * pageSize + 1;
          const lastEntry = Math.min(pageNumber * pageSize, totalEntries);
          return { firstEntry, lastEntry };
        }
      };
      

    useEffect(() => {
        fetch('http://127.0.0.1:8000/bankapi/branch/')
          .then((response) => response.json())
          .then((data) => {
            setApiData(data)
            setError(false)
          })
          .catch(() => setError(true));
      }, []);

    useEffect(() => {
      const filtered = apiData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredItems(filtered);

      setCurrentPage(1);
    }, [searchValue]);

    const itemsToDisplay = searchValue ? filteredItems : apiData;
    const lastIndex = currentPage * rowsnum;
    const firstIndex = lastIndex - rowsnum;
    const currentItems = itemsToDisplay.slice(firstIndex, lastIndex);
    const size = itemsToDisplay.length
    const pageNav = useRef(null)

    useEffect(() => {
        const { firstEntry, lastEntry } = calculatePageRange(size, rowsnum, currentPage);
        setLF([firstEntry, lastEntry]);
        pageNav.current = (
          <PageNavigation 
            l={firstEntry} 
            f={lastEntry} 
            curPage={currentPage}
            dataSize={size}
            entrySize={rowsnum}
          />
        );

      }, [size, rowsnum, currentPage]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
      };
    
    const handleNextPage = () => {
      if (lastIndex < size) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const IncreaseRow = () => {
        setRowsnum(rowsnum+1)
    };

    const DecreaseRow = () => {
        const down = rowsnum

        if (down>5)
            setRowsnum(rowsnum-1)
    
    };

    const changePage = (n: number) => {
        if (n*rowsnum <= size + rowsnum)
            setCurrentPage(n)
    }

    const handleFirst = () => {
        setCurrentPage(1);
      };
      
    const handleLast = () => {
      setCurrentPage(Math.ceil(size+rowsnum));
    };

    let x, y

    x = lf[0]
    y = lf[1] 

  return (
        <div className="flex-col">
                <section className='mx-40'>
            <div className='flex mt-11 mb-8'>
                <div className='flex-col w-[465px]'>
                    <h1 className='text-[28px] mt-14 font-medium tracking-tight leading-snug '>Search and find your nearest Branches</h1>
                    <h2 className="mt-5 text-base font-normal leading-normal">
                        You can find your branch according to your choice and 
                        know your branch location according to your area.              
                    </h2>
                </div>
                <div className='rounded-[10px] border-2 border-[#E6E6E6] ml-auto'>
                    <div className='mx-12'>
                        <h1 className='text-lg font-medium leading-7 mt-7'>Search your nearest Branches, SME Centers, and offices</h1>
                        <div className='flex-col space-y-3'>
                            <div className='flex leading-5 space-x-4 mt-6'>
                                <input
                                  className="w-[270px] border-2 border-[#53389E] h-12 rounded-[10px] pl-4 py-3 font-semibold"
                                  placeholder="Bank Name"            
                                />
                                <input
                                  className="w-[270px] border-2 border-[#53389E] h-12 rounded-[10px] pl-4 py-3"
                                  placeholder="Branch Name"
                                  onChange={handleInputChange}            
                                />                            
                            </div>
                            <div className='flex leading-5 space-x-4'>
                                <div className='flex w-[270px] h-12 rounded-[10px] px-4 py-3 border-2 border-[#53389E] text-[#C9C9C9]'>
                                    Select Division
                                    <Options/>
                                </div>
                                <div className='flex w-[270px] h-12 rounded-[10px] px-4 py-3 border-2 border-[#53389E] text-[#C9C9C9]'>
                                    Select District
                                    <Options/>
                                </div>
                            </div>
                        </div>
                        <button className='rounded-[10px] bg-[#53389E] text-white text-lg font-medium leading-7 h-16 w-full mt-5 mb-7'>Search</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-7 mb-6'>
                <h1 className='leading-5 py-1'>Showing</h1>
                <div className='bg-[#53389E] text-white py-1 px-4 mx-4 flex'>
                    {rowsnum}
                    <div className='flex-col'>
                        <button onClick={IncreaseRow} className="block">
                            <Up colour="white"/>
                        </button>
                        <button onClick={DecreaseRow} className="block">
                            <Down colour='white'/>
                        </button>
                    </div>
                </div>
                <h1 className='leading-5 py-1'>entries</h1>
            </div>
        </section>
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
                <td className="w-44 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    Contact
                </td>
                <td className="w-48 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    Email
                </td>
                <td className="w-32 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    Swift Code
                </td>
                <td className="w-32 text-white text-center border-r-2 border-[#D3D3D3] flex items-center justify-center">
                    Routing No.
                </td>
            </tr>
            {error ? 
                <div className="flex items-center justify-center h-[100px] border-x-2 border-[#D3D3D3]">No result</div>
                : 
                (
                    currentItems.map((branch, index) => (
                        <BranchComponent
                        key={index} 
                        index={index} 
                        Branch_Name={branch.name} 
                        District={branch.district}
                        Division="Dhaka"
                        Address={branch.address_line} 
                        Email={branch.email}
                        Contact={branch.telephone}
                        Swift_Code={branch.swift_code}
                        Routing_No={branch.routing_number}
                        />
                    ))
                )}        
        </table>
        <div>
          {pageNav.current}
        </div>
        {/* <div className="flex mx-40 mt-9 mb-32">
            <h2 className="leading-5">Showing {x} to {y} of {size} entries</h2>
            <div className='flex space-x-1 ml-auto'>
                <button onClick={handlePrevPage} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Prev</button>
                <button onClick={handleFirst} className='text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>First</button>
                {[1, 2, 3].map((number, index) => (
                  <button
                    key={index}
                    onClick={() => changePage(number)}
                    className={number === currentPage
                      ? 'bg-[#53389E] text-white px-2 h-7'
                      : 'bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'
                    }
                  >
                    {number}
                  </button>
                ))}
                <button onClick={handleNextPage} className='bg-white text-[#53389E] border-2 border-[#53389E] leading-normal px-2 h-7'>Next</button>
            </div>
        </div> */}
    </div>
  );
};

export default BranchTable;