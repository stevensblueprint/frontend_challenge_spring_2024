import React, { useState } from 'react';
import blueprintLogo from './assets/blueprint.png';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [formData, setFormData] = useState(null);


  const Submitit = () => {


    setFormData({ name, email, gradYear });
  };


  return (
    <>
    <center><h1>Stevens Blueprint</h1></center>
    <center> <h1>Frontend Assessment S2024</h1></center>


       <center><div className='logo'>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Vite logo" />
        </a>
      </div></center>
 
      <p><font size="+3">Aleena's Custom Form</font></p>
      <p><font size="+2">Please submit your information in the form, so that it can be displayed below!</font></p>


     
      <hr />
     
      <p>Name</p>
      <input type="text" size="100" value={name} onChange={(e) => setName(e.target.value)} />
     
      <p>Email</p>
      <input type="text" size="100"value={email} onChange={(e) => setEmail(e.target.value)} />
     
      <div>
        <label>Graduation Year</label></div>
        <div> <input type="radio" value="2025" checked={gradYear === '2025'} onChange={() => setGradYear('2025')} /> 2025</div>
        <div>   <input type="radio" value="2026" checked={gradYear === '2026'} onChange={() => setGradYear('2026')} /> 2026</div>
        <div> <input type="radio" value="2027" checked={gradYear === '2027'} onChange={() => setGradYear('2027')} /> 2027</div>
        <div> <input type="radio" value="2028" checked={gradYear === '2028'} onChange={() => setGradYear('2028')} /> 2028</div>
   


      <center>
        <button className="button" onClick={Submitit}>Submit</button>
      </center>
     
      <hr />
     
      {formData && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Graduation Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formData.name}</td>
              <td>{formData.email}</td>
              <td>{formData.gradYear}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}


export default App;


