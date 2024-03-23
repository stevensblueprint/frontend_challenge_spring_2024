import blueprintLogo from './assets/blueprint.png'
import memberPicture from './assets/member.png'
import profileIcon from './assets/profile.png'
import * as contentJSON from './assets/data/content.json'
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

      <div className="">
        <div className="">
          <img src={memberPicture} alt="Member Picture"/>
        </div>

        <div className="">
          <div className="">
            <img src={profileIcon} alt="Profile Headshot"/>
          </div>
          <div className="">{ contentJSON.anectdote.quote }</div>
          <div className="">{ contentJSON.anectdote.author }</div>
        </div>

        <div className="">
          <div className="">{ contentJSON.content.header }</div>
          <div className="">{ contentJSON.content.body }</div>
        </div>

        <div className="">
          <img src="" alt="Missing Asset"/>
        </div>
      </div>

      <p>Blueprint is cool!</p>
    </>
  )
}

export default App
