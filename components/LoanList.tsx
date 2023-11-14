'use client';

import LoanRow from "./LoanRow";

const LoanList = (): JSX.Element => {

  return (
    <div className="mx-40">
        <LoanRow/>
        <LoanRow/>
        <LoanRow/>
        <LoanRow/>
    </div>
  );
};

export default LoanList;