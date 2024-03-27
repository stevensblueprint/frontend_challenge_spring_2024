import blueprintLogo from "./assets/blueprint.png";
import "./App.css";
import { useState } from "react";
import data from "./assets/data/content.json";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState();

  const [tabName, setTabName] = useState("");
  const [tabEmail, setTabEmail] = useState("");
  const [tabYear, setTabYear] = useState();

  const updateFormData = (event) => {
    event.preventDefault();
    setTabName(name);
    setTabEmail(email);
    setTabYear(year);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div style={{ margin: "5px" }}>
      <div
        style={{
          border: "2px solid #0078E8",
          padding: "5vw",
          borderRadius: "20px",
          width: "30vw",
          textAlign: "left",
          margin: "auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Stevens Blueprint</h1>
        <h1 style={{ textAlign: "center" }}> Frontend Assessment S2024</h1>
        <div style={{ textAlign: "center" }}>
          <a href="https://sitblueprint.com" target="_blank">
            <img
              src={blueprintLogo}
              className="logo"
              alt="Vite logo"
              style={{
                width: "10vw",
              }}
            />
          </a>
        </div>
        <h2>Zaid's Custom Form</h2>
        <h3>
          Please submit your information in the form, so that it can be
          displayed below!
        </h3>
        <hr
          style={{
            color: "#0078E8",
            background: "#0078E8",
            height: 1,
          }}
        />
        <form onSubmit={updateFormData}>
          <label for="fName">Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            styles={{
              width: "60vw",
            }}
          />
          <br />
          <br />
          <label for="fEmail">Email</label>
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter your Stevens email"
            onChange={handleEmailChange}
          />
          <br />
          <br />
          <div>
            <label>
              Graduation Year
              <br />
              <input
                type="radio"
                name="fYear"
                value="2025"
                className="form-check-input"
                onClick={handleYearChange}
              />
              2025
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="fYear"
                value="2026"
                className="form-check-input"
                onClick={handleYearChange}
              />
              2026
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="fYear"
                value="2027"
                className="form-check-input"
                onClick={handleYearChange}
              />
              2027
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="fYear"
                value="2028"
                className="form-check-input"
                onClick={handleYearChange}
              />
              2028
            </label>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                fontSize: "20px",
                backgroundColor: "#0078E8",
                color: "white",
                fontFamily: "monospace",
                borderRadius: "20px",
                width: "90px",
                height: "30px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        <hr
          style={{
            color: "#0078E8",
            background: "#0078E8",
            height: 1,
          }}
        />
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
              <td>{tabName}</td>
              <td>{tabEmail}</td>
              <td>{tabYear}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
