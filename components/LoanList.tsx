'use client';

import LoanRow from "./LoanRow";
import SelectOption from "./SelectOption";

const LoanList = (): JSX.Element => {

  const bankArray = ["Sonali Bank Limited", 
                    "Brac Bank Limited", 
                    "Al-Arafah Bank Limited",
                    "Agrani Bank Limited",
                    "Jamuna Bank Limited"
                    ];
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

  return (
    <div className="mx-40 my-20 flex">
      <div className="w-96">
        <SelectOption title="Select your bank" banks={bankArray}/>
        <SelectOption title="Select Loan type" banks={loanArray}/>
        <SelectOption title="Loan Duration" banks={durationArray}/>
      </div>
      <div className="ml-auto">
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
          <LoanRow/>
      </div>
    </div>
  );
};

export default LoanList;