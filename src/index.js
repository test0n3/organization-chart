import React from "react";
import { render } from "react-dom";
import CompanyName from "./views/create-company";
import ChartView from "./views/chart";
import CeoName from "./views/ceo-view";
import ChartHeader from "./views/chart-header";

function App() {
  const [companyName, setCompanyName] = React.useState(
    localStorage.getItem("companyName")
  );

  function handleCompanyName(value) {
    localStorage.setItem("companyName", value);
    setCompanyName(value);
  }

  const [ceoName, setCeoName] = React.useState(localStorage.getItem("ceoName"));

  function handleCeoName(value) {
    localStorage.setItem("ceoName", value);
    setCeoName(value);
  }

  if (!companyName) {
    return <CompanyName onCompany={handleCompanyName} />;
  } else if (!ceoName) {
    return <CeoName onCeo={handleCeoName} />;
  } else {
    return (
      <>
        <ChartHeader companyName={companyName} />
        <ChartView ceoName={ceoName} companyName={companyName} />
      </>
    );
  }
}

const $root = document.getElementById("root");
render(<App />, $root);
