'use client';

import ATMComponent from './ATMComponent';
import Up from './Icons/Up';
import Down from './Icons/Down';
import { useEffect, useRef, useState } from 'react';
import PageNavigation from './PageNavigation';
import SearchIcon from './Icons/SearchIcon';
import SearchDropdown from './SearchDropdown';
import { DistrictData, Option, findNameById } from '@/app/branch-list/data';

const ATMTable = (): JSX.Element => {

    const [lf, setLF] = useState([0,0]);
    const [rowsnum, setRowsnum] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [filteredItems, setFilteredItems] = useState<any[]>([]);  
    const [error, setError] = useState(true)
    const [apiData, setApiData] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>("")

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
        let apiUrl = 'http://127.0.0.1:8000/bankapi/atm/';
      
        if (selectedDistrict) {
          apiUrl += `?district=${selectedDistrict}`;
        }
      
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setApiData(data);
            setError(false);
          })
          .catch(() => setError(true));
      }, [selectedDistrict]);

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

    const handleDistrictChange = (selectedOption: Option | null) => {
      selectedOption ? setSelectedDistrict(selectedOption.value) : setSelectedDistrict(null)
    }
    let x, y

    x = lf[0]
    y = lf[1] 

  return (
        <div className="flex-col">
                <section className='mx-40'>
            <div className='flex mt-11 mb-8'>
                <div className='flex-col w-[465px]'>
                    <h1 className='text-[28px] mt-14 font-medium tracking-tight leading-snug '>Search and find your nearest Automated teller machine(ATM)</h1>
                    <h2 className="mt-5 text-base font-normal leading-normal">
                        You can find your branch according to your choice and 
                        know your branch location according to your area.              
                    </h2>
                </div>
            </div>
            <div className='flex items-center my-8'>
              <div className="flex items-center relative">
                  <input
                      className="border-2 border-[#B3B3B3] h-14 rounded-xl py-4 pl-14"
                      placeholder="Search branch"
                      onChange={handleInputChange}            
                  />
                  <SearchIcon/>
              </div>
              <div className='flex ml-6'>
                <SearchDropdown option={DistrictData} width={60} name='District' onChange={handleDistrictChange} />
              </div>
              <div className='flex ml-auto'>
                  <h1 className='leading-5 py-1'>Showing</h1>
                  <div className='bg-[#53389E] text-white py-1 px-4 mx-4  flex'>
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
                    ATM Name
                </td>
                <td className="w-28 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    District
                </td>
                <td className="w-72 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    Bank Name
                </td>
                <td className="w-80 text-white text-center border-r-2 border-[#D3D3D3]  flex items-center justify-center">
                    Address
                </td>
                <td className="w-28 text-white text-center border-r-2 border-[#D3D3D3] flex items-center justify-center">
                    Map
                </td>
            </tr>
            {error ? 
                <div className="flex items-center justify-center h-[100px] border-x-2 border-[#D3D3D3]">No result</div>
                : 
                (
                    currentItems.map((branch, index) => (
                        <ATMComponent 
                        key={index} 
                        index={index} 
                        ATM_Name={branch.name} 
                        District={branch.district}
                        Address={branch.address_line} 
                        Bank_Name={findNameById(branch.bank_id)}
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

export default ATMTable;