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
      <div className='form-container'>
        <h1 className='form-header'>Blueprint Frontend Assessment S2024</h1>
        
        <div>
          <a href="https://sitblueprint.com" target="_blank">
            <img src={blueprintLogo} className='form-logo' alt="Vite logo" />
          </a>
        </div>

        <p className='form-description-header'>Nathaniel's Custom Form</p>
        <p className='form-description-body'>
          Please submit your information in the form, 
          so that it can be displayed below!
        </p>
        
        <BlueForm setFormData={setFormData}/>
        <FormDisplay formData={formData}/>
      </div>

      <div className='ribbon-container'>
        <img className='ribbon-item ribbon-item-icon' src={memberPicture} alt="Member Picture"/>

        <div className='ribbon-item'>
          <img className='ribbon-item-icon-headshot' src={profileIcon} alt="Profile Headshot"/>
          <div className='ribbon-item-quote'>{ contentJSON.anectdote.quote }</div>
          <div className='ribbon-item-author'>{ contentJSON.anectdote.author }</div>
        </div>

        <div className='ribbon-item'>
          <div className='ribbon-item-heading'>{ contentJSON.content.header }</div>
          <div className='ribbon-item-body'>{ contentJSON.content.body }</div>
        </div>

        
          <img className='ribbon-item ribbon-item-icon' src={memberPicture} alt="Member Icon"/>
        
      </div>

      <p className='footer-text'>Blueprint is cool!</p>
    </>
  )
}

export default App
