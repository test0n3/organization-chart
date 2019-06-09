/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import InputCompanyName from "../components/input-company";
import Background from "../assets/giphy3.gif";

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
        backgroundImage: `url(${Background})`,
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
        "@media (max-width: 960px)": {
          backgroundPosition: "90%"
        }
      }}
    >
      <InputCompanyName setCompanyName={onCompany} />
    </div>
  );
}

export default CompanyName;
