import React from 'react';
import InputCompanyName from '../components/input-company';

function CompanyName({ onCompany }) {
  return (
    <div css={{ display: 'flex', padding: '1rem .5rem', alignItems: 'center' }}>
      <InputCompanyName setCompanyName={onCompany} />
    </div>
  );
}

export default CompanyName;
