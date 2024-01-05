'use client';

import Options from './Icons/Options';
import Up from './Icons/Up';
import Down from './Icons/Down';
import { useEffect, useRef, useState } from 'react';
import BranchComponent from './BranchComponent';
import PageNavigation from './PageNavigation';
import SearchIcon from './Icons/SearchIcon';
import FilterIcon from './Icons/FilterIcon';

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
            type={1}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            changePage={changePage}
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
      if (rowsnum === 5) {
        setRowsnum(10);
      } else if (rowsnum === 10) {
        setRowsnum(20);
      }
    };

    const DecreaseRow = () => {
      if (rowsnum === 20) {
        setRowsnum(10);
      } else if (rowsnum === 10) {
        setRowsnum(5);
      }
    };

    const changePage = (n: number) => {
        if (n*rowsnum <= size + rowsnum)
            setCurrentPage(n)
    }

    let x, y

    x = lf[0]
    y = lf[1] 

  return (
      <div className="flex-col">
        <section className='mx-40'>
            <div className='flex-col w-[465px] mt-11 mb-8'>
                <h1 className='text-[28px] mt-14 font-medium tracking-tight leading-snug '>Search and find your nearest Branches</h1>
                <h2 className="mt-5 text-base font-normal leading-normal">
                    You can find your branch according to your choice and 
                    know your branch location according to your area.              
                </h2>
            </div>
            <div className='flex items-center'>
              <div className="flex items-center relative">
                  <input
                      className="border-2 border-[#B3B3B3] h-14 rounded-xl w-[376px] py-4 pl-[72px]"
                      placeholder="Search your desire bank"
                      onChange={handleInputChange}            
                  />
                  <SearchIcon/>
              </div>
              <div contentEditable={true} className="flex border-2 border-[#B3B3B3] h-14 py-4 px-6 rounded-xl text-[#B3B3B3]">
                  Filter by bank type
              </div>
              <div className='flex ml-auto'>
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
        <div className='mx-40 mt-9 mb-32'>
          {pageNav.current}
        </div>
    </div>
  );
};

export default BranchTable;