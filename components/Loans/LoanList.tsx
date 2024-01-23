'use client';

import { useEffect, useRef, useState } from "react";
import LoanRow from "./LoanRow";
import SliderComponent from "./SliderComponent";
import SelectOption from "./SelectOption";
import SmallSearchIcon from "../Icons/SmallSearchIcon";
import PageNavigation from "../PageNavigation";
import Select from 'react-select'
import { Filter2, NumOption, SortBy, calculatePageRange, findIdByName, findNameById } from "@/app/data";

const LoanList = ({ searchedBank, searchedLoan }: { searchedBank: string, searchedLoan: string}): JSX.Element => {

  const loanArray = ["Home Loan", 
                    "Car Loan", 
                    "Personal Loan",
                    "Education Loan",
                    "Other Loan"
                    ];
  const durationArray = [ 
                    "< 5 Years", 
                    "< 10 Years",
                    "< 15 Years",
                    "< 20 Years",
                    "20 > Years",
                    ];

  const bankArray = [""];

  const [sliderValues, setSliderValues] = useState([0, 5000000]);
  const [sliderValues2, setSliderValues2] = useState([0, 20]);

  const [lf, setLF] = useState([0,0]);
  const [rowsnum, setRowsnum] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [banks, setBanks] = useState<string[]>([]);
  const [loans, setLoans] = useState<string[]>([]);
  const [durations, setDurations] = useState<string[]>([]);
  const [apiData, setApiData] = useState<any[]>([])
  const [entryCount, setEntryCount] = useState(0);
  const [error, setError] = useState(true)

  const filterLoansByDuration = (loanData : any, selectedDuration : string) => {
    switch (selectedDuration) {
      case "< 5 Years":
        return loanData.filter((loan : any) => loan.duration < 60);
      case "< 10 Years":
        return loanData.filter((loan : any) => loan.duration < 120);
      case "< 15 Years":
        return loanData.filter((loan : any) => loan.duration < 180);
      case "< 20 Years":
        return loanData.filter((loan : any) => loan.duration < 240);
      case "20 > Years":
        return loanData.filter((loan : any) => loan.duration >= 240);
      default:
        return loanData;
    }
  };

  useEffect(() => {
    let apiUrl = 'http://127.0.0.1:8000/bankapi/loan/?';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data;

        if (loans.length !== 0)
          filteredData = filteredData.filter(item => loans.includes(item.type))

        if (banks.length !== 0)
          filteredData = filteredData.filter(item => banks.includes(findNameById(item.bank_id)))

        filteredData = filterLoansByDuration(filteredData, durations[0])
        setApiData(filteredData);
        setEntryCount(filteredData.length);
        setError(false);
      })
      .catch(() => setError(true));
  }, [loans, banks, durations]);  

  const handleChange = (option: string, category: number) => {
    if (category === 1) {
      if (banks.includes(option)) {
        setBanks(banks.filter((item) => item !== option));
      } else {
        setBanks([...banks, option]);
      }
    } else if (category === 2) {
      if (loans.includes(option)) {
        setLoans(loans.filter((item) => item !== option));
      } else {
        setLoans([...loans, option]);
      }
    } else if (category === 3) {
      if (durations.includes(option)) {
        setDurations(durations.filter((item) => item !== option));
      } else {
        setDurations([...durations, option]);
      }
    }
    setCurrentPage(1)
  };
  
  const checkBox = (option: string, category: number): boolean => {
    if (category === 1)
      return banks.includes(option);
    else if (category === 2)
      return loans.includes(option)
    else if (category === 3)
      return durations.includes(option)
  };

  const lastIndex = lf[1];
  const firstIndex = lf[0];
  const currentItems = apiData.slice(firstIndex-1, lastIndex);
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
          type={2}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          changePage={changePage}
        />
      );
    }, [entryCount, rowsnum, currentPage]);

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
      setCurrentPage(1);
    };

    const changePage = (n: number) => {
        if (n*rowsnum <= entryCount + rowsnum)
            setCurrentPage(n)
    }  

  const handleSliderChange = (values: [number, number]) => {
    setSliderValues(values);
    setCurrentPage(1);
  };
  const handleSliderChange2 = (values: [number, number]) => {
    setSliderValues2(values);
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(banks);
    console.log(loans);
    console.log(durations);
    
  }, [banks, loans, durations]);  

  return (
    <div className="mx-40 my-20 flex">
      <div className="w-96 flex-col space-y-6">
        <SelectOption title="Select your bank" types={bankArray} handleChange={handleChange} checkBox={checkBox} bank={searchedBank}/>
        <SelectOption title="Select Loan type" types={loanArray} handleChange={handleChange} checkBox={checkBox} bank={searchedBank}/>
        <SliderComponent
          title="Minimum Loan Amount"
          min={0}
          max={5000000}
          step={100000}
          value={sliderValues}
          onChange={handleSliderChange}
        />
        <SelectOption title="Loan Duration" types={durationArray} handleChange={handleChange} checkBox={checkBox} bank={searchedBank}/>
        <SliderComponent
          title="Rate of interest (ROI)"
          min={0}
          max={20}
          step={1}
          value={sliderValues2}
          onChange={handleSliderChange2}
        />
      </div>
      <div className="ml-auto">
        <h1 className="text-[28px] font-semibold leading-[38px] text-[#1D2939]">Search your loan information</h1>
        <div className="flex mt-8 mb-12 items-center">
          <div className="relative w-[286px] flex items-center">
            <input
              className="h-11 w-full border-[0.5px] border-[#D4D4D4] rounded-md pl-12 pr-4 py-2 font-normal text-sm text-[#B3B3B3] placeholder-[#B3B3B3] placeholder-opacity-50"
              placeholder="Search your desired bank loans"
            />
            <SmallSearchIcon/>
          </div>
          <h1 className="leading-10 font-normal ml-auto">Showing</h1>
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: '#B3B3B3', borderRadius: 12, borderWidth: 1,
                color: '#B3B3B3', marginLeft: 16, marginRight: 16,
                width: 54, height: 28, textAlign: 'center', fontSize: 14, paddingLeft: 12,
                borderTopRightRadius : 6, borderTopLeftRadius : 6, borderBottomRightRadius : 6, borderBottomLeftRadius : 6
              }),
              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                display: 'none'
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                paddingRight: 6,
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                margin: '0 -16px',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                width: 54,
                marginLeft: 16
              }),
            }}
            defaultValue={Filter2[0]}
            isDisabled={error ? true : false}
            onChange={handleRowsNumChange}
            isSearchable={false}
            options={Filter2}
          />
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: '#B3B3B3', borderRadius: 12, borderWidth: 1,
                color: '#B3B3B3', marginLeft: 16, marginRight: 16,
                width: 112, height: 28, textAlign: 'center', fontSize: 14, paddingLeft: 12,
                borderTopRightRadius : 6, borderTopLeftRadius : 6, borderBottomRightRadius : 6, borderBottomLeftRadius : 6
              }),
              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                display: 'none'
              }),
              dropdownIndicator: (baseStyles) => ({
                ...baseStyles,
                paddingRight: 6,
              }),
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                margin: '0 -16px',
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                width: 154,
                marginLeft: 16,
                fontSize: 12
              }),
            }}
            isDisabled={error ? true : false}
            placeholder="Sort By"
            isSearchable={false}
            isClearable={true}
            options={SortBy}
          />
        </div>
        <div className="space-y-9">
        {error ? 
          <div>Loading</div>
          : 
          (
              apiData.map((loan) => (
                  <LoanRow
                    key={0}
                    min={loan.loan_min_limit}
                    max={loan.loan_max_limit}
                    interest={loan.interest_rate}
                    grace_period={loan.grace_period}
                    interest_type={loan.interest_type}
                    duration={loan.duration}
                    bank_id={loan.bank_id}
                    name={loan.name}
                    type={loan.type}
                  />
              ))
              // <div>{lf[0]} {lf[1]}</div>
          )} 
        </div>
        <div className="mt-[72px]">
          {pageNav.current}
        </div>
      </div>
    </div>
  );
};

export default LoanList;