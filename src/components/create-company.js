import React from 'react';
import InputCompanyName from './input-company';

function CompanyName() {
  const [CompanyName, setCompanyName] = React.useState('');

  return (
    <div>
      <InputCompanyName CompanyName={CompanyName} setCompanyName={setCompanyName} />
    </div>
  );
}

export default CompanyName;