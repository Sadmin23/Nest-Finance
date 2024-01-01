'use client';

import {  useEffect, useRef, useState } from "react";
import LoanRow from "./LoanRow";
import SliderComponent from "./SliderComponent";
import SelectOption from "./SelectOption";
import SmallSearchIcon from "./Icons/SmallSearchIcon";
import Up from "./Icons/Up";
import Down from "./Icons/Down";
import FilterIcon from "./Icons/FilterIcon";
import PageNavigation from "./PageNavigation";

const LoanList = (): JSX.Element => {

  const loanArray = ["Home Loan", 
                    "Car Loan", 
                    "Personal Loan",
                    "Education Loan",
                    "Other Loan"
                    ];
  const durationArray = ["1.5 Years - 18 Month", 
                    "3 Years - 36 Month", 
                    "5 Years - 60 Month",
                    "8 Years - 96 Month",
                    "10 Years - 120 Month"
                    ];

  const bankArray = [""];

  const [sliderValues, setSliderValues] = useState([0, 15000]);
  const [sliderValues2, setSliderValues2] = useState([0, 20]);

  const [lf, setLF] = useState([0,0]);
  const [rowsnum, setRowsnum] = useState(5);
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

  const lastIndex = currentPage * rowsnum;
  const firstIndex = lastIndex - rowsnum;
  const size = 7
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
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleFirst={handleFirst}
          handleLast={handleLast}
          changePage={changePage}
        />
      );
    }, [size, rowsnum, currentPage]);

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

    const handleFirst = () => {
        setCurrentPage(1);
      };
      
    const handleLast = () => {
      setCurrentPage(Math.ceil(size/rowsnum));
    };

    let x, y

    x = lf[0]
    y = lf[1]     

  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
  };
  const handleSliderChange2 = (values: [number, number]) => {
    setSliderValues2(values);
  };
  return (
    <div className="mx-40 my-20 flex">
      <div className="w-96 flex-col space-y-6">
        <SelectOption title="Select your bank" types={bankArray}/>
        <SelectOption title="Select Loan type" types={loanArray}/>
        <SliderComponent
          title="Loan Amount"
          min={0}
          max={20000}
          value={sliderValues}
          onChange={handleSliderChange}
        />
        <SelectOption title="Loan Duration" types={durationArray}/>
        <SliderComponent
          title="Rate of interest (ROI)"
          min={0}
          max={100}
          value={sliderValues2}
          onChange={handleSliderChange2}
        />
      </div>
      <div className="ml-auto">
        <h1 className="text-[28px] font-semibold leading-[38px] text-[#1D2939]">Search your loan information</h1>
        <div className="flex mt-8 mb-12">
          <div className="relative w-[286px] flex items-center">
            <input
              className="h-11 w-full border-[0.5px] border-[#D4D4D4] rounded-md pl-12 pr-4 py-2 font-normal text-sm text-[#B3B3B3] placeholder-[#B3B3B3] placeholder-opacity-50"
              placeholder="Search your desired bank loans"
            />
            <SmallSearchIcon/>
          </div>
          <h1 className="leading-10 font-normal ml-auto">Showing</h1>
          <div className='bg-white border-[0.5px] border-[#B3B3B3] rounded-md text-[#53389E] p-2 mx-4 flex'>
            {rowsnum}
            <div className='flex-col'>
              <button onClick={IncreaseRow} className="block">
                  <Up colour="purple"/>
              </button>
              <button onClick={DecreaseRow} className="block">
                  <Down colour="purple"/>
              </button>
            </div>
          </div>
          <div contentEditable={true} className="flex border-[0.5px] text-center text-sm leading-5 border-[#B3B3B3] rounded-md  text-[#B3B3B3] px-4 py-2 items-center">
              <FilterIcon right="2"/>
              Sort By
          </div>
        </div>
        <div className="space-y-9">
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
            <LoanRow/>
        </div>
        <div className="mt-[72px]">
          {pageNav.current}
        </div>
      </div>
    </div>
  );
};

export default LoanList;