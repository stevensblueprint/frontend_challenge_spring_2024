import blueprintLogo from './assets/blueprint.png'
import './App.css'

import { useState } from 'react'
import BlueForm from './components/BlueForm'
import FormDisplay from './components/FormDisplay'


function App() {
  const [formData, setFormData] = useState({ name: "", email: "", year: "" })

  return (
    <>
      <div className='logo'>
        <a href="https://sitblueprint.com" target="_blank">
          <img src={blueprintLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Blueprint Frontend Assessment S2024</h1>
      <div>
        <BlueForm setFormData={setFormData}/>
        <FormDisplay formData={formData}/>
      </div>
    </>
  )
}

export default App
