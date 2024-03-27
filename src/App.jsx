import React, { useState } from 'react';
import blueprintLogo from './assets/blueprint.png';
import './App.css';


function App() {

    let [name, setName] = useState('');

    let [email, setEmail] = useState('');

    let [year, setYear] = useState('');

    let [data, setData] = useState(null);

    let Submit = () => {
        setData({ name, email, year });
        if(!name){
            alert('Error: name is empty')
        }
        if(!email){
            alert('Error: email is empty')
        }
        if(!year){
            alert('Error: no graduation year selected')
        }
    };


    return (
        <>
            <center><h1>Stevens Blueprint</h1></center>
            <center><h1>Frontend Assessment S2024</h1></center>
            <center>
                <div className='logo'>
                    <a href="https://sitblueprint.com" target="_blank">
                        <img src={blueprintLogo} className="logo" alt="Vite logo"/>
                    </a>
                </div>
            </center>
            <p><font size="+3">Ishaan's Custom Form</font></p>
            <p><font size="+2">Please submit your information in the form, so that it can </font></p>
            <p><font size="+2">be displayed below!</font></p>


            <hr/>

            <p>Name</p>
            <input type="text" size="100" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

            <p>Email</p>
            <input type="text" size="100" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <div>
                <label>Graduation Year</label>
            </div>
            <div><input type="radio" id="year" value="2025" checked={year === '2025'}
                        onChange={() => setYear('2025')}/> 2025
            </div>
            <div><input type="radio" id="year" value="2026" checked={year === '2026'}
                        onChange={() => setYear('2026')}/> 2026
            </div>
            <div><input type="radio" id="year" value="2027" checked={year === '2027'}
                        onChange={() => setYear('2027')}/> 2027
            </div>
            <div><input type="radio" id="year" value="2028" checked={year === '2028'}
                        onChange={() => setYear('2028')}/> 2028
            </div>


            <center>
                <button className="button" onClick={Submit}>Submit</button>
            </center>


            <hr/>
                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Graduation Year</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{data?.name}</td>
                        <td>{data?.email}</td>
                        <td>{data?.year}</td>
                    </tr>
                    </tbody>
                </table>
        </>
    );
}


export default App;