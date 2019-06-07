import React from 'react';
import { render } from 'react-dom';
import CompanyName from './components/create-company';
import Chart from './views/chart';

function App() {
  const [companyName, setCompanyName] = React.useState(
    localStorage.getItem('companyName')
  );

  function handleCompanyName(value) {
    localStorage.setItem('companyName', value);
    setCompanyName(value);
  }
  if (!companyName) {
    return <CompanyName />;
  } // return formCompany }
  return <Chart />;
}

const $root = document.getElementById('root');
render(<App />, $root);
