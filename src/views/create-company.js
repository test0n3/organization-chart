import React from 'react';
import InputCompanyName from '../components/input-company';

function CompanyName({onCompany}) {

  return (
    <div>
      <InputCompanyName setCompanyName={onCompany} />
    </div>
  );
}

export default CompanyName;