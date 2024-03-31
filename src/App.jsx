import React, { useState } from 'react';
import './App.css';
import BlueprintLogo from './BlueprintLogo';
import Form from './Form';
import ResultData from './ResultData';
import ReadContent from './ReadContent';

function App() {
  //Constants
  const [errorMsg, setErrorMsg] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  //When submit button pressed
  const handleSubmit = (data) => {
    //Checks if data is valid
    if (!validateData(data)) {
      return;
    }

    //Updates data table
    setDataTable([...dataTable, data]);
    setErrorMsg("");
    setSubmitted(true);
  };

  //Function to validate data
  const validateData = (data) => {
    const { name, email, year } = data;

    if (typeof name != "string" || name.trim() === "") {
      setErrorMsg("Please enter a name.")
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMsg("Please enter a valid email ID.")
      return false;
    }

    if (!year || year.trim() === "") {
      setErrorMsg("Please select a graduation year.")
      return false;
    }

    return true;
  }

  return (
    //HTML for page
    <div className="center-container">
      <div className="container">
        <p>
          <h1 className='header'>Stevens Blueprint </h1>
          <h1 className='header'>Frontend Assessment S2024</h1>
        </p>
        <BlueprintLogo />
        <p className="">
          <h4><div>Vinayak's Custom Form</div></h4>
          Please submit your information in the form, so that it can be displayed below!
        </p>
        <hr className="blue-line" />
        <Form onSubmit={handleSubmit} />
        <hr className="blue-line" />
        <ResultData data={dataTable} />
        <h5 className='error'>{errorMsg} </h5>
      </div>

      {!submitted && (
        <ReadContent />
      )}

      {!submitted && (
        <div class="container">
          <h2>Blueprint is cool!</h2>
        </div>
      )}

    </div>
  );
}

export default App;
