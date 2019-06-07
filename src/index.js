import React from 'react';
import { render } from 'react-dom';
import CompanyName from './components/create-company';

function App() {
  const [companyName, setCompanyName] = React.useState(
    localStorage.getItem("companyName")
  );
  
  function handleCompanyName(value) {
    localStorage.setItem("companyName", value);
    setCompanyName(value);
  }

  if(!companyName) {return <CompanyName/>}// return formCompany }
  return {}
}

const $root = document.getElementById('root');
render(<App />, $root);