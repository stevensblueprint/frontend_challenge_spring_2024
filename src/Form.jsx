import React, { useState } from 'react';

//Shows main input form

function Form({ onSubmit }) {
  //Constants
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gradYear, setGradYear] = useState("");

  //Sends submitted data
  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      year: gradYear
    };
    onSubmit(data);
  };

  return (
    //HTML for page
    <div>
      <div className="input-field">
        <p></p>
        <label htmlFor="name">Name</label>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your full name"
            className='textbox'
          />
        </div>
      </div>
      <div className="input-field">
        <p></p>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your Steven email"
            className='textbox'
          />
        </div>
      </div>
      <div className="input-field">
        <p></p>
        <span>Graduation Year</span>
        {[2025, 2026, 2027, 2028].map((gradYearValue) => (
          <React.Fragment key={gradYearValue}>
            <div>
              <input
                type="radio"
                id={gradYearValue}
                name="year"
                value={gradYearValue.toString()}
                checked={gradYear === gradYearValue.toString()}
                onChange={() => setGradYear(gradYearValue.toString())}
              />
              <label htmlFor={gradYearValue}>{gradYearValue}</label>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="submit-button-container">
        <button className="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Form;
