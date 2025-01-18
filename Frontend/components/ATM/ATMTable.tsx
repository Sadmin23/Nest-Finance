'use client';

import ATMComponent from './ATMComponent';
import { useEffect, useRef, useState } from 'react';
import PageNavigation from '../PageNavigation';
import SearchIcon from '../Icons/SearchIcon';
import SearchDropdown from '../SearchDropdown';
import { BankData, DistrictData, Filter, NumOption, Option, calculatePageRange, findNameById } from '@/app/data';
import { findIdByName } from '../../app/data';
import ATMHero from './ATMHero';
import TableSkeleton from '../TableSkeleton';
import Select from 'react-select'

const ATMTable = ({ searchedBank }: { searchedBank: string }): JSX.Element => {

  let result = searchedBank.replace(/-/g, ' ');  

    const [lf, setLF] = useState([0,0]);
    const [rowsnum, setRowsnum] = useState(5);
    const [entryCount, setEntryCount] = useState(0);
    const [searchValue, setSearchValue] = useState('');  
    const [error, setError] = useState(true)
    const [apiData, setApiData] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>("")
    const [selectedBank, setSelectedBank] = useState<string | null>(result)

    useEffect(() => {
      let apiUrl = `http://127.0.0.1:8000/bankapi/atm/?district=${selectedDistrict}&bank_id=${findIdByName(selectedBank)}&pagesize=${rowsnum}&pagenumber=${currentPage}`;
        
      if (searchValue.length>=3)
        apiUrl += `&search=${searchValue}`

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data.results);
          setEntryCount(data.count)
          setError(false);
        })
        .catch(() => setError(true));
    }, [selectedDistrict, selectedBank, searchValue, rowsnum, currentPage]);

    const lastIndex = lf[1];
    const firstIndex = lf[0];
    const pageNav = useRef(null)

    useEffect(() => {
        const { firstEntry, lastEntry } = calculatePageRange(entryCount, rowsnum, currentPage);
        setLF([firstEntry, lastEntry]);
        pageNav.current = (
          <PageNavigation
            l={firstEntry} 
            f={lastEntry} 
            curPage={currentPage}
            dataSize={entryCount}
            entrySize={rowsnum}
            type={1}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            changePage={changePage}
          />
        );
      }, [entryCount, rowsnum, currentPage]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setCurrentPage(1)
      };
    
    const handleNextPage = () => {
      if (lastIndex < entryCount) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleRowsNumChange = (selectedOption:NumOption | null) => {
      selectedOption ? setRowsnum(selectedOption.value) : setRowsnum(5)
      // selectedOption ? setCurrentPage(Math.ceil(lastIndex/selectedOption?.value)) : ''
      setCurrentPage(1)
    };

    const changePage = (n: number) => {
        if (n*rowsnum <= entryCount + rowsnum)
            setCurrentPage(n)
    }

    const handleDistrictChange = (selectedOption: Option | null) => {
      selectedOption ? setSelectedDistrict(selectedOption.value) : setSelectedDistrict("")
      setCurrentPage(1)
    }
    const handleBankChange = (selectedOption: any) => {
      console.log(selectedOption);
      selectedOption ? setSelectedBank(selectedOption.value) : setSelectedBank("")
      setCurrentPage(1)
    };

    let defaultBank = {value: result, label: result}
    let defaultDistrict = {value: '', label: ''}

  return (
        <div className="flex-col">
          <section className='mx-20 xl:mx-40'>
            <ATMHero/>
            <div className='flex items-center my-8'>
              <div className="flex items-center relative">
                  <input
                      className="border border-[#B3B3B3] w-72 h-10 rounded-md py-4 pl-14 hover:border-[#53389E] focus:outline-0"
                      placeholder="Search ATM"
                      onChange={handleInputChange}            
                  />
                  <SearchIcon/>
              </div>
              <div className='flex space-x-6 ml-6'>
                <SearchDropdown option={BankData} width='72' name='Bank name' searchable={true} defaultOption={defaultBank} onChange={handleBankChange} />
                <SearchDropdown option={DistrictData} width='72' name='District' searchable={true} defaultOption={defaultDistrict} onChange={handleDistrictChange} />
              </div>
              <div className='flex ml-auto items-center'>
                  <h1 className='leading-5 py-1'>Showing</h1>
                  <Select
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        borderColor: '#B3B3B3',
                        boxShadow: 'none',
                        '&:hover': {
                          border: '1px solid #53389E',
                        },
                        borderRadius: 6,
                        borderWidth: 1,
                        color: '#B3B3B3',
                        marginLeft: 16,
                        marginRight: 16,
                        width: 84,
                        height: 28,
                        textAlign: 'center',
                      }),
                      menu: (baseStyles) => ({
                        ...baseStyles,
                        width: 84,
                        marginLeft: 16
                      }),
                    }}
                    defaultValue={Filter[0]}
                    isDisabled={error ? true : false}
                    onChange={handleRowsNumChange}
                    options={Filter}
                  />
                  <h1 className='leading-5 py-1'>entries</h1>
              </div>
            </div>
        </section>
        <section className='flex-col mx-40 rounded-xl'>
            <main className="flex h-20 bg-[#53389E] rounded-t-xl">
                <div className="w-80 text-white text-center border-x rounded-tl-xl border-[#D3D3D3] flex items-center justify-center">
                    ATM Name
                </div>
                <div className="w-52 text-white text-center border-r border-t border-[#D3D3D3]  flex items-center justify-center">
                    Bank Name
                </div>
                <div className="w-80 text-white text-center border-r border-t border-[#D3D3D3]  flex items-center justify-center">
                    Address
                </div>
                <div className="w-44 text-white text-center border-r border-t border-[#D3D3D3]  flex items-center justify-center">
                    District
                </div>
                <div className="w-44 text-white text-center border-r border-t rounded-tr-xl border-[#D3D3D3] flex items-center justify-center">
                    Division
                </div>
            </main>
            {error ? 
                <TableSkeleton type={0}/>
                : 
                (
                    apiData.map((branch, index) => (
                        <ATMComponent 
                        key={index} 
                        Total_Index={firstIndex+index} 
                        index={index}
                        ATM_Name={branch.name} 
                        District={branch.district}
                        Address={branch.address_line} 
                        Bank_Name={findNameById(branch.bank_id)}
                        Last_Entry={lastIndex}
                        />
                    ))
                )}        
        </section>
        <div className='mx-40 mt-9 mb-32'>
          {pageNav.current}
        </div>
    </div>
  );
};

export default ATMTable;