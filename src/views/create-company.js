/** @jsx jsx */
import React from 'react';
import { jsx } from "@emotion/core";
import InputCompanyName from '../components/input-company';

function CompanyName({ onCompany }) {
  return (
    <div
    css={{
            display: "flex",
            flexDirection: "column"
          }}
    >
      <InputCompanyName setCompanyName={onCompany} />
    </div>
  );
}

export default CompanyName;
