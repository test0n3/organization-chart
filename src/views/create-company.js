/** @jsx jsx */
import React from 'react';
import { jsx } from "@emotion/core";
import InputCompanyName from '../components/input-company';

function CompanyName({ onCompany }) {
  return (
    <div
    css={{
      minHeight: "100vh",
      margin: "0 0 0 0",
      display: "flex",
      backgroundPosition: "center",
      backgroundSize: "cover",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Noto Sans",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat"
      }}
    >
      <InputCompanyName setCompanyName={onCompany} />
    </div>
  );
}

export default CompanyName;
