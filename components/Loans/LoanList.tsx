'use client';

import { useEffect, useRef, useState } from "react";
import LoanRow from "./LoanRow";
import SliderComponent from "./SliderComponent";
import SelectOption from "./SelectOption";
import SmallSearchIcon from "../Icons/SmallSearchIcon";
import PageNavigation from "../PageNavigation";
import Select from 'react-select'
import { Filter2, NumOption, Option, SortBy, calculatePageRange, findIdByName, findNameById } from "@/app/data";

const LoanList = ({ searchedBank, searchedLoan }: { searchedBank: string, searchedLoan: string}): JSX.Element => {

  const loanArray = ["Home Loan", 
                    "Car Loan", 
                    "Personal Loan",
                    "Education Loan",
                    "Other Loan"
                    ];
  const durationArray = [ 
                    "< 5 Years", 
                    "5 Years > and < 10 Years",
                    "10 Years > and < 15 Years",
                    "15 Years > and < 20 Years",
                    "20 > Years",
                    ];

  const bankArray = [""];

  const [sliderValues, setSliderValues] = useState([0, 5000000]);
  const [sliderValues2, setSliderValues2] = useState([0, 20]);
  const [lf, setLF] = useState([0,0]);
  const [rowsnum, setRowsnum] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const [banks, setBanks] = useState<string[]>([searchedBank]);
  const [loans, setLoans] = useState<string[]>([searchedLoan]);
  const [durations, setDurations] = useState<string[]>([]);
  const [apiData, setApiData] = useState<any[]>([])
  const [entryCount, setEntryCount] = useState(0);
  const [error, setError] = useState(true)
  const [ordering, setOrdering] = useState("name")

  function extractInterestRate(interestRate : string | null) {
    if (interestRate && typeof interestRate === 'string') {
      const rangeMatch = interestRate.match(/(\d+(\.\d+)?)\s*-\s*(\d+(\.\d+)?)/);
      
      if (rangeMatch) {
        return parseFloat(rangeMatch[1]);
      } else {
        return parseFloat(interestRate);
      }
    }
    return null
  }

  const filterLoansByDuration = (loanData: any, selectedDurations: string[]) => {
    if (selectedDurations.length === 0) {
      return loanData;
    }
  
    return loanData.filter((loan: any) => {

      if (loan.duration !== null) {
        return selectedDurations.some((selectedDuration) => {
          switch (selectedDuration) {
            case "< 5 Years":
              return loan.duration < 60;
            case "5 Years > and < 10 Years":
              return loan.duration >= 60 && loan.duration < 120;
            case "10 Years > and < 15 Years":
              return loan.duration >= 120 && loan.duration < 180;
            case "15 Years > and < 20 Years":
              return loan.duration >= 180 && loan.duration < 240;
            case "20 > Years":
              return loan.duration >= 240;
            default:
              return false;
          }
        });
      }
      return false;
    });
  };

  useEffect(() => {
    let apiUrl = `http://127.0.0.1:8000/bankapi/loan/?ordering=${ordering}`
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data;

        if (loans.length !== 0)
          filteredData = filteredData.filter(item => loans.includes(item.type))

        if (banks.length !== 0)
          filteredData = filteredData.filter(item => banks.includes(findNameById(item.bank_id)))

        if (searchedBank.length === 0)
          setBanks([])

        if (searchedLoan.length === 0)
          setLoans([])          

        if (ordering === '-duration') {
          filteredData = filteredData.sort((a, b) => {
            if (a.duration === null && b.duration !== null) return 1;
            if (a.duration !== null && b.duration === null) return -1;
            return 0;
          });
        } else if (ordering === '-loan_min_limit') {
          filteredData = filteredData.sort((a, b) => {
            if (a.loan_min_limit === null && b.loan_min_limit !== null) return 1;
            if (a.loan_min_limit !== null && b.loan_min_limit === null) return -1;
            return 0;
          });
        } else if (ordering === 'interest') {
          filteredData = filteredData.sort((a, b) => {
            const interestRateA = extractInterestRate(a.interest_rate);
            const interestRateB = extractInterestRate(b.interest_rate);
        
            // Handle null values
            if (interestRateA === null && interestRateB !== null) return 1;
            if (interestRateA !== null && interestRateB === null) return -1;
        
            // Sort by interest rate in ascending order
            return interestRateA - interestRateB;
          });
        } else if (ordering === '-interest') {
          filteredData = filteredData.sort((a, b) => {
            const interestRateA = extractInterestRate(a.interest_rate);
            const interestRateB = extractInterestRate(b.interest_rate);
        
            // Handle null values
            if (interestRateA === null && interestRateB !== null) return 1;
            if (interestRateA !== null && interestRateB === null) return -1;
        
            // Sort by interest rate in descending order
            return interestRateB - interestRateA;
          });
        }

        filteredData = filterLoansByDuration(filteredData, durations)

        filteredData = filteredData.filter(item => 
          item.loan_min_limit >= sliderValues[0] && item.loan_min_limit <= sliderValues[1]
        );

        filteredData = filteredData.filter(item => {
          const itemInterestRate = extractInterestRate(item.interest_rate);
          
          // Check if interest rate is within the specified range or is null
          return (itemInterestRate !== null && itemInterestRate >= sliderValues2[0] && itemInterestRate <= sliderValues2[1]) || item.interest_rate === null;
        });

        setApiData(filteredData);
        setEntryCount(filteredData.length);
        setError(false);
      })
      .catch(() => setError(true));
  }, [loans, banks, durations, ordering, sliderValues, sliderValues2]);

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

    const handleOrderChange = (selectedOption: Option | null) => {
      selectedOption ? setOrdering(selectedOption.value) : setOrdering('name')
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

  // useEffect(() => {
  //   console.log(banks);
  //   console.log(loans);
  //   console.log(durations);
    
  // }, [banks, loans, durations]);  

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
          step={0.5}
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
            onChange={handleOrderChange}
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
              currentItems.map((loan) => (
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